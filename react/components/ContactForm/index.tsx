import { useMutation } from 'react-apollo'
import createDocument from '../../graphql/mutation.createDocument.gql'
import { Input } from 'vtex.styleguide'
import style from './style.css'
import React, { useState } from 'react'
import FormFinish from './form-finish'

const ContactForm=()=>{
    const [cliEmail, setCliEmail] = useState('')
    const [cliPhone, setCliPhone] = useState('')
    const [cliGeneroMan, setCliGeneroMan] = useState('')
    const [cliGeneroWoman, setCliGeneroWoman] = useState('')
    const [cliGeneroKid, setCliGeneroKid] = useState('')
    const [cliTerminos, setCliTerminos] = useState(true)

    const [CreateDocument,{ loading: addItemLoading }]= useMutation(createDocument)

    const [validEmail,setValidEmail]=useState(false)
    const [validPhone,setValidPhone]=useState(false)
    const [validGenero,setValidGenero]=useState(false)

    const [dataPush, setDataPush]=useState(false)

    const regExpEmail= new RegExp(/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/)
    const regExpPhone=new RegExp(/\d{10}/)

    const sendCliData= async ()=>{
        try{
            await CreateDocument({
                variables:{
                    acronym:'CC',
                    document:{
                        fields:[
                            {
                                key:'email',
                                value:cliEmail
                            },
                            {
                                key:'phone',
                                value:cliPhone
                            },
                            {
                                key:'genero',
                                value:cliGeneroMan!=''?cliGeneroMan:cliGeneroWoman!=''?cliGeneroWoman:cliGeneroKid
                            },
                            {
                                key:'terminos',
                                value:cliTerminos
                            }
                        ]
                    }
                }
            })
        }catch(e){
            const dataSent=`Email=${cliEmail},
                            Telefono=${cliPhone},
                            Genero=${cliGeneroMan!=''?cliGeneroMan:cliGeneroWoman!=''?cliGeneroWoman:cliGeneroKid},
                            policheck=${cliTerminos}`
            console.log('SEND DATA ERROR: An error ocurred while sending data to the entity (MI) in MasterData: ',e,' DATA SENT: ',dataSent)
        }
    }
    const validaEmail=()=>{
        regExpEmail.test(cliEmail)?(
            setValidEmail(true)
        ):(
            setValidEmail(false)
        )
    }
    const validaPhone=()=>{
        regExpPhone.test(cliPhone)?(
            setValidPhone(true)
        ):(
            setValidPhone(false)
        )
    }
    const validaGenero=()=>{
        if(cliGeneroMan.length||cliGeneroWoman.length||cliGeneroKid.length){
            setValidGenero(true)
        }
    }
    const CheckboxTerminos = () => {
        return (
          <label className={`${!cliTerminos?style.InputChecInactive:style.InputChecActive} ${style.labelCheck}`}>
            <input type="checkbox" checked={cliTerminos} onChange={()=>{setCliTerminos(!cliTerminos)}} required /> &nbsp; Aceptar &nbsp;<a href="https://www.brandingshoes.com/legales/terminos-y-condiciones"> términos y condiciones</a>
          </label>
        );
    }
    const CheckboxGeneroMujer = () => {
        return (
          <label className={`${!cliGeneroWoman?style.InputChecInactive:style.InputChecActive} ${style.labelCheck}`}>
            <input type="checkbox" checked={cliGeneroWoman.length>0?true:false} onChange={()=>{setCliGeneroWoman('MUJER'),setCliGeneroMan(''),setCliGeneroKid(''),validaGenero()}} /> &nbsp; Mujer
          </label>
        );
    }
    const CheckboxGeneroHombre = () => {
        return (
          <label className={`${!cliGeneroMan?style.InputChecInactive:style.InputChecActive} ${style.labelCheck}`}>
            <input type="checkbox" checked={cliGeneroMan.length>0?true:false} onChange={()=>{setCliGeneroMan(' HOMBRE'),setCliGeneroWoman(''),setCliGeneroKid(''),validaGenero()}} /> &nbsp; Hombre
          </label>
        );
    }
    const CheckboxGeneroKid = () => {
        return (
          <label className={`${!cliGeneroKid?style.InputChecInactive:style.InputChecActive} ${style.labelCheck}`}>
            <input type="checkbox" checked={cliGeneroKid.length>0?true:false} onChange={()=>{setCliGeneroKid(' NIÑO'),setCliGeneroMan(''),setCliGeneroWoman(''),validaGenero()}} /> &nbsp; Niños
          </label>
        );
    }
    if (addItemLoading) {
        return <div>"Enviando datos..."</div>
    }

    if(dataPush){
        return <FormFinish/>
    }
    return (
        <div className={style.containerCliForm}>
            <div className={style.contentInputsCliForm}>
                <style>
                    {`
                        .vtex-input-prefix__group{
                            border:none;
                        }
                    `}
                </style>
                <div className={style.inputsTextCliForm}>
                    <Input
                        blockClass="EmailInput"
                        placeholder="Email"
                        value={cliEmail}
                        onChange={(e: any)=>{
                                setCliEmail(e.currentTarget.value)
                        }}
                        required
                    />
                    <div className={style.nextBtn} onClick={()=>validaEmail()}><svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.717411 0.96912C0.787079 0.899275 0.869842 0.843861 0.96096 0.806051C1.05208 0.768242 1.14976 0.748779 1.24841 0.748779C1.34706 0.748779 1.44474 0.768242 1.53586 0.806051C1.62698 0.843861 1.70974 0.899275 1.77941 0.96912L10.7794 9.96912C10.8493 10.0388 10.9047 10.1216 10.9425 10.2127C10.9803 10.3038 10.9998 10.4015 10.9998 10.5001C10.9998 10.5988 10.9803 10.6965 10.9425 10.7876C10.9047 10.8787 10.8493 10.9615 10.7794 11.0311L1.77941 20.0311C1.63858 20.1719 1.44757 20.2511 1.24841 20.2511C1.04925 20.2511 0.858241 20.1719 0.717411 20.0311C0.576581 19.8903 0.497463 19.6993 0.497463 19.5001C0.497463 19.301 0.576581 19.1099 0.717411 18.9691L9.18791 10.5001L0.717411 2.03112C0.647566 1.96145 0.592151 1.87869 0.554342 1.78757C0.516532 1.69645 0.49707 1.59877 0.49707 1.50012C0.49707 1.40147 0.516532 1.30379 0.554342 1.21267C0.592151 1.12155 0.647566 1.03879 0.717411 0.96912Z" fill="#3E3E3C"/>
</svg>
</div>
                </div>
                <div className={`${style.inputsTextCliForm} ${validEmail?style.show:style.hidden}`}>
                    <Input
                        blockClass="PhoneInput"
                        placeholder="Celular"
                        value={cliPhone}
                        onChange={(e: any)=>{
                                setCliPhone(e.currentTarget.value)
                        }}
                        required
                    />
                    <div className={style.nextBtn} onClick={()=>validaPhone()}><svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.717411 0.96912C0.787079 0.899275 0.869842 0.843861 0.96096 0.806051C1.05208 0.768242 1.14976 0.748779 1.24841 0.748779C1.34706 0.748779 1.44474 0.768242 1.53586 0.806051C1.62698 0.843861 1.70974 0.899275 1.77941 0.96912L10.7794 9.96912C10.8493 10.0388 10.9047 10.1216 10.9425 10.2127C10.9803 10.3038 10.9998 10.4015 10.9998 10.5001C10.9998 10.5988 10.9803 10.6965 10.9425 10.7876C10.9047 10.8787 10.8493 10.9615 10.7794 11.0311L1.77941 20.0311C1.63858 20.1719 1.44757 20.2511 1.24841 20.2511C1.04925 20.2511 0.858241 20.1719 0.717411 20.0311C0.576581 19.8903 0.497463 19.6993 0.497463 19.5001C0.497463 19.301 0.576581 19.1099 0.717411 18.9691L9.18791 10.5001L0.717411 2.03112C0.647566 1.96145 0.592151 1.87869 0.554342 1.78757C0.516532 1.69645 0.49707 1.59877 0.49707 1.50012C0.49707 1.40147 0.516532 1.30379 0.554342 1.21267C0.592151 1.12155 0.647566 1.03879 0.717411 0.96912Z" fill="#3E3E3C"/>
</svg>
</div>
                </div>
            </div>
            <div className={`${style.contentGeneCheckbox} ${validEmail && validPhone?style.show:style.hidden}`}>
                <div className={style.checkBoxGenero}>
                    <CheckboxGeneroMujer />
                </div>
                <div className={style.checkBoxGenero}>
                    <CheckboxGeneroHombre />
                </div>
                <div className={style.checkBoxGenero}>
                    <CheckboxGeneroKid />
                </div>
            </div>
            <div className={style.contentTerminosCheckbox}>
                <CheckboxTerminos/>
            </div>
            <div className={`${style.contentBtn} ${validEmail&&validPhone&&validGenero?style.show:style.hidden}`}>
                <div className={style.sendActiveFormButton} onClick={()=>{sendCliData(), setDataPush(true)}}>
                    <span className={`${style.textBtnForm}`}>UNIRSE</span>
                </div>
            </div>
        </div>
    )
}

export default ContactForm