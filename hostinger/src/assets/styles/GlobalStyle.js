import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    height: 100%;
    background-color: #202428;

  }

  body{
    font-family: sans-serif;
    background-color: #f2f3f6;
    letter-spacing: .3px;
  }

  button{
    cursor: pointer;
    border: 1px solid #ccc;
  }

  a {
    text-decoration: none;
    color: white;
    opacity: 0.9;
  }

  a:hover{
    opacity: 1;
  }

  input{
    font-size: 1rem;
    border: 1px solid #ccc;
    padding: 17px;
    border-radius: 3px;
  }

  li{
    font-size: 13px;
    line-height: 24px;
    font-weight: 400;
    list-style: none;
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;



export default GlobalStyle;
