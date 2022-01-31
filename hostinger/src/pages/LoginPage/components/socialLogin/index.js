import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

import SocialContainer from "./styled";

function SocialLogin(){
  return(
    <SocialContainer>
      <h3>Entrar</h3>

      <div className="sociallogin-div">
        <p className="sociallogin-iconGoogle" >
          <a href="/login">
            <FaGoogle color="#fff"/>
          </a>
        </p>

        <p className="sociallogin-iconFacebook">
          <a href="/login">
            <FaFacebookF color="#fff"/>
          </a>
        </p>
      </div>

    <div className="sociallogin-orWrapper">
      <div className="sociallogin-orDivider">
        OU
      </div>
    </div>
    </SocialContainer>
  )
}

export default SocialLogin;
