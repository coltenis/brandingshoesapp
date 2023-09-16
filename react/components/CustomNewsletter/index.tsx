
import React, { useState } from 'react';
import { useMutation } from 'react-apollo';

import { Input, Checkbox } from 'vtex.styleguide';

import createDocument from '../../graphql/mutation.createDocument.gql';

import styles from './styles.css'
import ArrowNext from './components/ArrowNext';
import SuccessResponse from './components/SuccessResponse';

import { validateEmail } from '../../utils/validateEmail';
import { onlyNumbers } from '../../utils/onlyNumbers';


interface IGender {
  id: string;
  checked: boolean;
  label: string;
  value: string
}

const initialNewsletterForm = {
  email: "",
  phone: "",
  genders: [
    {
      id: "genderFemale",
      checked: false,
      label: "Mujer",
      value: "MUJER"
    },
    {
      id: "genderMale",
      checked: false,
      label: "Hombre",
      value: "HOMBRE"
    },
    {
      id: "genderChildren",
      checked: false,
      label: "Niños",
      value: "NIÑO"
    }
  ],
  termsAndConditions: true,
  errors: {
    email: true,
    phone: true,
    gender: true
  }
}

const CustomNewsletter = () : JSX.Element => {

  const [newsletterForm, setNewsletterForm] = useState(initialNewsletterForm);
  const { email: errorEmail, phone: errorPhone, gender: errorGender } = newsletterForm.errors;
  const [successResponse, setSuccessResponse] = useState(false);
  
  const [CreateDocument, { loading: loadingCreateDocument }]= useMutation(createDocument);


  const verifyProperties = (property: string) => {
    let isPassed = false;

    if (property === "email") {
      isPassed = validateEmail(newsletterForm.email); 
    }
    if (property === "phone") {
      isPassed = newsletterForm.phone.length === 10;
    }

    setNewsletterForm({
      ...newsletterForm,
      errors: {
        ...newsletterForm.errors,
        [property]: !isPassed
      }
    });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, name, type, value, checked } = event.target;

    if (type === "checkbox") {

      if (name === "gender-group") {
        setNewsletterForm((prevProps) => ({
          ...prevProps,
          genders: 
            prevProps.genders.map((gender: IGender) => (
              {
                ...gender,
                checked: (id === gender.id) ? checked : false
              }
            )),
          errors: {
            ...prevProps.errors,
            gender: !checked
          }
        }));
      }
      
      setNewsletterForm((prevProps) => ({
        ...prevProps,
        [id]: checked
      }));

      return;
    }

    setNewsletterForm((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  }

  const handleConfirm = async () => {

    const { email, phone, genders, termsAndConditions } = newsletterForm;
    const gender = genders.find((gender: IGender) => gender.checked)?.value || ""

    try {
      await CreateDocument({
        variables:{
          acronym: "CC",
          document: {
            fields: [
              {
                  key: "email",
                  value: email
              },
              {
                  key: "phone",
                  value: phone
              },
              {
                  key: "genero",
                  value: gender
              },
              {
                  key: "terminos",
                  value: termsAndConditions
              }
            ]
          }
        }
      });
      setSuccessResponse(true);
    } catch(e) {
      const dataSent=`
        Email=${email},
        Telefono=${phone},
        Genero=${gender},
        policheck=${termsAndConditions}
      `
      console.log('SEND DATA ERROR: An error ocurred while sending data to the entity (MI) in MasterData: ', e, ' DATA SENT: ', dataSent);
    }
  }

  if (loadingCreateDocument) {
    return <div>"Enviando datos..."</div>;
  }

  if (successResponse) {
    return <SuccessResponse />;
  }

  return (
    <>
      <style>
        {`
          .vtex-input-prefix__group{
              border:none;
          }
        `}
      </style>
      <div className={styles.containerCliForm}>
        <div className={styles.contentInputsCliForm}>
          <div className={styles.inputsTextCliForm}>
            <Input
              required
              autoComplete={"off"}
              name="email"
              type="email"
              placeholder="Email"
              value={newsletterForm.email}
              onChange={handleChange}
            />
            <ArrowNext
              className={styles.nextBtn}
              onClick={() => verifyProperties("email")}
            />
          </div>
          <div className={`${styles.inputsTextCliForm} ${!errorEmail ? styles.show : styles.hidden}`}>
            <Input
              required
              autoComplete={"off"}
              maxLength={10}
              name="phone"
              type="text"
              placeholder="Celular"
              value={newsletterForm.phone}
              onChange={handleChange}
              onKeyPress={onlyNumbers}
            />
            <ArrowNext
              className={styles.nextBtn}
              onClick={() => verifyProperties("phone")}
            />
          </div>
        </div>
        <div className={`${styles.contentGeneCheckbox} ${!errorEmail && !errorPhone ? styles.show : styles.hidden}`}>
          {
            newsletterForm.genders.map((gender: IGender) => (
              <div key={gender.id} className={`${styles.checkBoxGenero} ${gender.checked ? styles["checkBoxGenero--checked"] : ""}`}>
                <Checkbox
                  checked={gender.checked}
                  id={gender.id}
                  name="gender-group"
                  label={<span className={styles.labelCheck}>{gender.label}</span>}
                  onChange={handleChange}
                />
              </div>
            ))
          }
        </div>
        <div className={`${styles.contentTerminosCheckbox} ${newsletterForm.termsAndConditions ? styles["contentTerminosCheckbox--checked"] : "" }`}>
          <Checkbox
            checked={newsletterForm.termsAndConditions}
            id="termsAndConditions"
            name="terms-and-conditions"
            label={
              <span className={styles.labelCheck}>Aceptar&nbsp;<a href="https://www.brandingshoes.com/legales/terminos-y-condiciones" target="_blank"> términos y condiciones</a></span>
            }
            onChange={handleChange}
          />
        </div>
        <div className={`${styles.contentBtn} ${!errorEmail && !errorPhone && !errorGender && newsletterForm.termsAndConditions ? styles.show : styles.hidden}`}>
          <div className={styles.sendActiveFormButton} onClick={handleConfirm}>
            <span className={`${styles.textBtnForm}`}>UNIRSE</span>
          </div>
        </div>
      </div>
    </>
  );

};

export default CustomNewsletter;