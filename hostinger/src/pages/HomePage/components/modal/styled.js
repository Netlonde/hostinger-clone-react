import styled from "styled-components";

const BackgroundContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  z-index: 2;
  background-color: #78787a;
`;

export default BackgroundContainer;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  height: 500px;
  width: 870px;
  z-index: 3;
  padding: 15px;
  margin-bottom: 100px;
  border-radius: 3px;

  .modal-close{
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
  }

  .modal-close button{
    background-color: transparent;
    border: none;
    transition: all ease 100ms;
  }

  .modal-closeIcon:hover{
    color: #7e7e7e;
  }

  .modal-title{
    color: #1d1e20;
    margin-bottom: 1rem;
    font-size: 16px;
    line-height: 32px;
  }

  .modal-optionButton{
    display: inline-block;
    border: 1px solid #673de6;
    background-color: transparent;
    font-weight: 700;
    margin-bottom: .5rem;
    margin-top: .5rem;
    font-size: 14px;
    padding: 8px 24px;
    line-height: 24px;
    transition: all ease 200ms;
  }

  .modal-optionButton:hover{
    background-color: #673de6;
    color: #fff ;
  }

  .btn1{
    border-radius: 4px 0 0 4px;
  }

  .btn3{
    border-radius: 0 4px 4px 0;
  }

  .modal-optionContainer{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 30px;
    margin-top: 40px;
  }

  .modal-optionBox{
    display: flex;
    flex-direction: column;
    border: 1px solid #dad9da;
    width: 1865px;
    height: 164px;
    border-radius: 10px;
    line-height: 24px;
    font-weight: 400;
    transition: all ease 200ms;
    cursor: pointer;
  }

  .modal-optionBox:hover{
    background-color: #673de6;
    color: #fff;
    border: 1px solid #dad9da;
  }

  .modal-optionDiv{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
  }

  .modal-pricing{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
  }

  .modal-footer{
    display: flex;
    align-items: center;
    justify-content: right;
    margin-top: 50px;
    width: 100%;
    border-top: 1px solid #ccc;
  }

  .modal-footerContainer{
    width: 38%;
  }

  .modal-footerPayment{
    margin-top: 10px;
    width: 100%;
  }

  .modal-totalValue{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .modal-buyButton{
    margin-top: 10px;
  }

  .modal-buyButton button{
    width: 100%;
    color: #fff;
    background-color: #00b090;
    border-color: #00b090;
    font-weight: 700;
    font-size: 14px;
    padding: 8px 24px;
    line-height: 24px;
    border-radius: 3px;
    transition: all ease-in-out 300ms;
  }

  .modal-buyButton button:hover{
    color: #fff;
    background-color: #008a71;
    border-color: #007d66;
  }

  @media (max-width: 935px) {
    height: 700px;
    width: 500px;

    .modal-optionContainer{
      display: block;

      overflow: scroll;
    }

    .modal-optionBox{
      margin-top: 15px;
      width: 100%;
    }

    .modal-footerContainer{
      width: 100%;
    }
  }

  @media (max-width: 580px) {
      height: 700px;
      width: 340px;

      .modal-optionContainer{
        display: block;
        overflow: scroll;
      }

      .modal-optionBox{
        margin-top: 15px;
        width: 100%;
    }
  }
`;
