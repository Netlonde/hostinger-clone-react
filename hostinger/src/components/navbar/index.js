import React, { useContext } from "react";

import Nav from "./styled";

import { FaBell, FaUserAlt, FaBars } from "react-icons/fa"
import {GiBrazilFlag} from "react-icons/gi";

import {Context} from "../../store/AuthContext"

import Modal from "./components/modal";
import ResponsiveList from "./components/responsiveList";

function Navbar(){
  const { modalClose, setModalClose, showLinks, setShowLinks } = useContext(Context);


  return(
    <>
      <Nav>
        <div className="navbar-logo">
          <img
            src="https://santrelmedia.com/wp-content/uploads/2020/12/HostingerLogoWhite-1024x205.png"
            alt="Logo da hostinger"
          />
        </div>

        <div className="navbar-menu">
          <button className="navbar-responsiveList" onClick={() => setShowLinks(!showLinks)}>
            <FaBars size={22} color="#fff" />
          </button>
          <ul className="navbar-listMenu">
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
                  <button className="navbar-listMenuButton">Novo</button>
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
          </ul>
        </div>

        <div className="navbar-icons">
          <div>
            <span><GiBrazilFlag size={14} className="navbar-flabBrazil"/></span>
          </div>

          <div>
            <span><FaBell size={24} className="navbar-bell"/></span>
          </div>

          <div>
            <span>
              <button className="navbar-userButton" type="submit" onClick={() => setModalClose(true)}>
                <FaUserAlt size={24} className="navbar-user"/>
              </button>
            </span>
          </div>

        </div>
      </Nav>
      {modalClose && <Modal />}
      {showLinks && <ResponsiveList />}
    </>
  )
}

export default Navbar;
