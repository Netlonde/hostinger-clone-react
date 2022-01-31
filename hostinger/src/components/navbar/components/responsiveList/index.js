/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

import Container from "./styled";

import { Context } from "../../../../store/AuthContext";

function ResponsiveList(){
  const navigate = useNavigate();
  const { setShowLinks, logout } = useContext(Context);

  function handleLogout(){
    logout();

    navigate("/login");
  }

  return(
    <Container>
      <div>
        <button className="responsivelist-closeButton" onClick={() => setShowLinks(false)}>
          <FaWindowClose size={20} color="#673de6"/>
        </button>
      </div>
      <ul className="responsivelist-listMenu">
        <a href="/">
          <li>
            <span>Início</span>
          </li>
        </a>

        <a href="/">
          <li>
            <span>Hospedagem</span>
          </li>
        </a>

        <a href="/">
          <li>
            <span>E-mails</span>
          </li>
        </a>

        <a href="/">
          <li>
            <span>Domínios</span>
          </li>
        </a>

        <a href="/">
          <li>
            <span>Servidores</span>
          </li>
        </a>

        <a href="/">
          <li>
            <span>
              Criador de Sites
              <button className="responsivelist-listMenuButton">Novo</button>
            </span>
          </li>
        </a>

        <a href="/">
          <li>
            <span>Faturas</span>
          </li>
        </a>

        <a href="/">
          <li>
            <span>Ajuda</span>
          </li>
        </a>

        <a href="/">
          <li>
            <span>Loja</span>
          </li>
        </a>

        <a href="#" onClick={() => handleLogout()}>
          <li>
            <span>Sair</span>
          </li>
        </a>
      </ul>
    </Container>
  )
}

export default ResponsiveList;
