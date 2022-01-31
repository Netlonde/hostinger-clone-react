import styled from "styled-components";

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;


  h3{
    font-size: 22px;
    line-height: 2.4rem;
    margin-bottom: 20px;
    color: #212529;
  }

  .sociallogin-div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .sociallogin-iconGoogle,
  .sociallogin-iconFacebook{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 45px;
    border-radius: 5px;
    margin-bottom: 10px;
    transition: all ease-in-out 300ms;
    cursor: pointer;
  }

  .sociallogin-iconGoogle a,
  .sociallogin-iconFacebook a{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sociallogin-iconFacebook{
    background-color: #4267b2;
  }

  .sociallogin-iconGoogle{
    background-color: #db4437;
  }

  .sociallogin-iconFacebook:hover{
    background-color: #263c68;
  }

  .sociallogin-iconGoogle:hover{
    background-color: #92241a;
  }

  .sociallogin-orWrapper{
    width: 100%;
    max-width: 325px;
    margin: 0 auto;
    padding: 5px 0 15px;
    font-size: 10px;
    line-height: 1.5;
  }

  .sociallogin-orDivider{
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: space-around;
    color: #9e9e9e;
  }

  .sociallogin-orDivider:before,
  .sociallogin-orDivider:after{
    background-color: #000;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
    background-color: #ccc;

  }

`;

export default SocialContainer;
