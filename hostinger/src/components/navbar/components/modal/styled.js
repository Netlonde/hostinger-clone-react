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

export const ModalContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  height: 225px;
  width: 350px;
  z-index: 3;
  padding: 15px;
  margin-bottom: 100px;
  border-radius: 3px;

  h3{
    margin-bottom: 25px;
  }

  p{
    margin-bottom: 20px;
  }

  .modal-close{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-bottom: 15px;
  }

  .modal-close button{
    background-color: transparent;
    border: none;
    transition: all ease 100ms;
  }

  .modal-closeIcon{
    color: #7e7e7e;
  }

  .modal-closeIcon:hover{
    color: black;
  }

  .modal-buttonLogout,
  .modal-buttonCancel{
    border-radius: 3px;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 15px;
    width: 90px;
    color: white;
    transition: all ease-in-out 300ms;
  }

  .modal-buttonLogout{
    background-color: #dc3545;
    border: 1px solid #dc3545;
    margin-left: 10px;
  }

  .modal-buttonLogout:hover{
    background-color: #d63163;
    border: 1px solid #d63163;
  }

  .modal-buttonCancel{
    background-color: #28a745;
    border: 1px solid #28a745;
  }

  .modal-buttonCancel:hover{
    background-color: #00b090;
    border: 1px solid #00b090;
  }
`;


export default BackgroundContainer;
