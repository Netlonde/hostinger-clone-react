import React from "react";

import ForgotContainer, { BackgroundContainer } from "./styled";


function ForgotPage(){
  return(
    <BackgroundContainer>
      <ForgotContainer>
        <div className="forgotPage">
          <form className="forgotPage-form">
            <img
              className="forgotPage-image"
              data-src="https://assets.hostinger.com/images/password-reset-3eb415f678.svg"
              src="https://assets.hostinger.com/images/password-reset-3eb415f678.svg"
              alt="imagem principal da ForgotPage"
            />

            <h4 className="forgotPage-title"> Recupere sua Senha </h4>

            <div className="forgotPage-inputDiv">
              <input
                type="email"
                placeholder="Seu Endereço de Email"
              />

              <div className="forgotPage-button">
                <button type="button">Recuperar Senha</button>
              </div>
            </div>

            <a className="forgotPage-login" href="/login">Voltar ao login</a>

          </form>
        </div>
      </ForgotContainer>
    </BackgroundContainer>
  )
}

export default ForgotPage;
