import styled from "styled-components";

const ForgotContainer = styled.div`
  width: 525px;
  height: 720px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 420px;
    height: 420px;
  }

  .forgotPage{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 80%;
    height: 100%;
  }

  .forgotPage-form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .forgotPage-image{
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .forgotPage-title{
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 2.4rem;
  }

  .forgotPage-inputDiv{
    width: 100%;
  }

  .forgotPage-inputDiv input{
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    color: #333;
    outline: 0;
    margin-bottom: 20px;
  }

  .forgotPage-button{
    width: 100%;
  }

  .forgotPage-button button{
    width: 100%;
    color: #fff;
    background-color: #ff4546;
    transition: all ease-in-out 300ms;
    border-radius: 3px;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }

  .forgotPage-button button:hover{
    background-color: #ff1213;
    border: 1px solid #ff1213
  }

  .forgotPage-login{
    font-size: 10px;
    font-weight: 400;
    color: #737373;
    text-decoration: underline !important;
    margin-bottom: 20px;
  }

  .forgotPage-login:hover{
    text-decoration: none !important;
  }

  @media (max-width: 600px) {
    width: 400px;

    img{
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 400px) {
    height: 110vh;
    width: 400px;

    .forgotPage-form{
      height: 100%;
    }

    img{
      width: 300px;
      height: 300px;
    }
  }

`;

export const BackgroundContainer = styled.div`
  height: 800px ;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202428;

`;

export default ForgotContainer;
