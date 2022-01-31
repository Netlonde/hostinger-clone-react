import styled from "styled-components";


export const HomeStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;

  .homepage-container{
    width: 1110px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .homepage-content{
    width: 1110px;
    display: flex;
    align-items: left;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    margin-top: 100px;
  }

  .homepage-title{
    color: #1d1e20;
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 15px;
    line-height: 24px;
  }

  .homepage-text{
    margin-bottom: 1rem;
    color: #6c757d !important;
    font-size: 13px;
    line-height: 24px;
    font-weight: 400;
    margin: 0;
  }

  .homepage-services{
    display: flex;
    align-items: center;
    justify-content: left;
    margin-top: 30px;
    gap: 30px;
    height: 60%;
  }

  .homepage-hosp{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 25%;
    height: 100%;
    border: 1px solid #dad9da;
    border-radius: 8px;
    padding: 2.5rem;
    height: 100%;
    background-color: #fff;
    transition: all ease 150ms;
  }

  .homepage-hosp:hover{
    box-shadow: 0 0 8px 0 rgba(0,0,0,.08),0 0 15px 0 rgba(0,0,0,.02),0 0 20px 4px rgba(0,0,0,.06);
  }

  .homepage-icon{
    margin-bottom: 2.2rem;
  }

  .homepage-titleContainer{
    color: #35373b;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
  }

  .homepage-small{
    text-align: center;
    color: #6c757d;
    font-size: 70%;
    font-weight: 400;
    margin-bottom: 15px;
    line-height: 2;
  }

  .homepage-buttonContainer{
    color: #fff;
    background-color: #673de6;
    border-color: #673de6;
    font-weight: 700;
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 14px;
    padding: 8px 24px;
    line-height: 24px;
    letter-spacing: .3px;
    margin-top: 1rem;
    transition: all ease-in-out 150ms;
  }

  .homepage-buttonContainer:hover{
    background-color: #5025d1;;
  }

  @media (max-width: 1160px) {
    overflow-y: auto;

    .homepage-container{
      width: 900px;
    }

    .homepage-content{
      width: 900px;
    }
  }

  @media (max-width: 970px) {

    .homepage-container{
      width: 650px;
    }

    .homepage-content{
      width: 650px;
    }

    .homepage-services{
      flex-direction: column;
    }

    .homepage-hosp{
      width: 100%;
    }

  }

  @media (max-width: 710px) {

    .homepage-container{
      width: 450px;
    }

    .homepage-content{
      width: 450px;
    }

    .homepage-services{
      flex-direction: column;
    }

    .homepage-hosp{
      width: 100%;
    }
  }

 @media (max-width: 520px) {

    .homepage-container{
      width: 320px;
    }

    .homepage-content{
      width: 320px;
    }

    .homepage-services{
      flex-direction: column;
    }

    .homepage-hosp{
      width: 100%;
    }
  }
`;

