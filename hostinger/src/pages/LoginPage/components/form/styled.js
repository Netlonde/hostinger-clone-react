import styled from "styled-components";

export const Form = styled.form`
  width: 77%;
  display: flex;
  flex-direction: column;
  gap: 20px;


  .formlogin-input{
    background-color: #fff;
    color: #333;
    font-weight: 300;
    font-size: 14px;
    width: 100%;
    outline: 0;
  }

  .formlogin-button{
    background-color: #ff4546;
    border: 1px solid #ff4546;
    color: #fff;
    padding: 15px 20px;
    border-radius: 3px;
    font-size: 18px;
    font-weight: 700;
    height: 59px;
    transition: all ease-in-out 200ms;
  }

  .formlogin-button:hover{
    background-color: #ff1213;
    border: 1px solid #ff1213;
  }

  .formlogin-divForgot{
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .formlogin-forgot{
    color: #737373;
    margin-bottom: 25px;
    cursor: pointer;
    font-size: 10px;
    font-weight: 400;
    font-style: normal;
    text-decoration: underline;
  }

  .formlogin-forgot:hover{
    text-decoration: none;
  }
`;
