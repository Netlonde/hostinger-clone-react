import React, { useContext } from "react";
import { FaWindowClose } from "react-icons/fa"

import BackgroundContainer, { ModalContainer } from "./styled";

import { Context } from "../../../../store/AuthContext";

function Modal({config}){
  const { setmodalOptionsClose, monthsValue, setMonthsValue } = useContext(Context);


  function handleClick(months, value){
    setMonthsValue({
      months,
      value
    })
  }

  return(
    <BackgroundContainer>
      <ModalContainer>
        <div className="modal-close">
          <button onClick={() => {setmodalOptionsClose(false); setMonthsValue({value: 0, months: 1})}}>
            <FaWindowClose size={20} className="modal-closeIcon"/>
          </button>
        </div>

        <div className="modal-title">
          <h3>{config.title}</h3>
        </div>

        <div>
          <button className="modal-optionButton btn1" onClick={config.value}>
            Single
          </button>
          <button className="modal-optionButton">
            Premium
          </button>
          <button className="modal-optionButton btn3">
            Business
          </button>
        </div>

        <div className="modal-optionContainer">
          <div className="modal-optionBox">
            <div className="modal-optionDiv" onClick={() => handleClick(48,config.value)}>
              <h6>48 Meses</h6>

              <div className="modal-pricing">
                <div>
                  R$
                </div>

                <div>
                  {config.value}
                </div>

                <div>
                  /mês
                </div>
              </div>

            </div>
          </div>

          <div className="modal-optionBox">
            <div className="modal-optionDiv" onClick={() => handleClick(24,config.value + Math.floor((15/100)*config.value))}>
              <h6>24 Meses</h6>

              <div className="modal-pricing">
                <div>
                  R$
                </div>

                <div>
                  {(config.value + Math.floor((15/100)*config.value)).toFixed(2)}
                </div>

                <div>
                  /mês
                </div>
              </div>

            </div>
          </div>

          <div className="modal-optionBox">
            <div className="modal-optionDiv" onClick={() => handleClick(12,config.value + Math.floor((50/100)*config.value))}>
              <h6>12 Meses</h6>

              <div className="modal-pricing">
                <div>
                  R$
                </div>

                <div>
                  {(config.value + Math.floor((50/100)*config.value)).toFixed(2)}
                </div>

                <div>
                  /mês
                </div>
              </div>

            </div>
          </div>

          <div className="modal-optionBox">
            <div className="modal-optionDiv" onClick={() => handleClick(1,Math.floor(config.value *4.3).toFixed(2))}>
              <h6>1 Mês</h6>

              <div className="modal-pricing">
                <div>
                  R$
                </div>

                <div>
                {Math.floor(config.value *4.3).toFixed(2)}

                </div>

                <div>
                  /mês
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-footerContainer">
            <div className="modal-footerPayment">
              <div className="modal-totalValue">
                <h5>Total:</h5>
                <span>R${(monthsValue.months * monthsValue.value).toFixed(2) }</span>
              </div>

              <div className="modal-buyButton">
                <button>Finalizar Compra</button>
              </div>
            </div>
          </div>
        </div>

      </ModalContainer>
    </BackgroundContainer>
  )
}

export default Modal;
