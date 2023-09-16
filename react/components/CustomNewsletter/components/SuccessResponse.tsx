import React from 'react';

import style from '../styles.css';


const SuccessResponse = () : JSX.Element => {
  return (
    <div className={`${style.succesFormModal} flex flex-row justify-left`}>
      <style>
      {`.vtex-flex-layout-0-x-flexCol--content-text-promo-contact-form {
          display:none;
        }
      `}
    </style>
      <img src={"arquivos/BS-success-suscription-form.png"} />
      <div className={`${style.textSendEmail} flex flex-column juntify-left`}>
          <h2 className={style.successTitleForm}>¡FELICIDADES!</h2>
          <p className={style.textSuccessForm}>Encuentra tu cupón de descuento en tu bandeja de entrada</p>
      </div>
    </div>
  )
}

export default SuccessResponse