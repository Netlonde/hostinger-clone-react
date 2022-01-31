import React, {useContext} from "react";
import { FaWindowClose } from "react-icons/fa";

import BackgroundContainer, { ModalContainer } from "./styled";

import { Context } from "../../../../store/AuthContext";
import {useNavigate} from "react-router-dom";


function Modal(){
  const navigate = useNavigate();

  const { setModalClose, logout } = useContext(Context);

  function handleLogout(){
    logout();

    navigate("/login");
  }

  return(
    <BackgroundContainer>
        <ModalContainer>
          <div className="modal-close">
            <button onClick={() => setModalClose(false)}>
              <FaWindowClose size={20} className="modal-closeIcon"/>
            </button>
          </div>

          <div className="modal-title">
            <h3>Sair</h3>
          </div>

          <div className="modal-body">
            <p>Tem certeza que deseja sair?</p>
          </div>

          <div className="modal-footer">
            <button
              className="modal-buttonCancel"
              type="button" onClick={() => setModalClose(false)}>
                Cancelar
              </button>
            <button
              className="modal-buttonLogout"
              type="button" onClick={() => handleLogout()}>
                Sair
              </button>
          </div>

        </ModalContainer>
    </BackgroundContainer>
  )
}

export default Modal;
