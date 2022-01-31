import React from "react";

import { Container } from "../../assets/styles/GlobalStyle";
import { LoginStyled, Background } from './styled';

import FormLogin from "./components/form";
import SocialLogin from "./components/socialLogin";

function LoginPage(){
  return(
      <Background>
        <Container>
            <LoginStyled>
              <SocialLogin />
              <FormLogin />
            </LoginStyled>
        </Container>
      </Background>
  )

}

export default LoginPage;
