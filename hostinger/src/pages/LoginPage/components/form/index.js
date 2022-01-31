import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";

import loginSchema from "../../../../components/yup/loginValidation";


import { Form } from "./styled";
import {Context} from "../../../../store/AuthContext";

function FormLogin(){
  const {login, password, setPassword, email, setEmail} = useContext(Context)
  const navigate = useNavigate();


  async function handleLogin(e){
    e.preventDefault();

    const loginIsValid = await (loginSchema.isValid({email, password}));

    if(!loginIsValid) return;

    await login();

    return navigate("/");
  }


  return(
    <Form onSubmit={handleLogin}>
      <div>
        <input
          className="formlogin-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          required
        />
      </div>

      <div>
        <input
          className="formlogin-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Senha"
          required
        />
      </div>


      <button className="formlogin-button" type="submit">Entrar</button>


      <div className="formlogin-divForgot">
        <a className="formlogin-forgot" href="/redefinir-senha">Esqueceu a senha?</a>
      </div>
    </Form>
  )
}

export default FormLogin;
