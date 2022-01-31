import React, { useContext } from "react";
import { FaServer, FaCloud, FaHdd, FaGlobeAfrica  } from "react-icons/fa";

import { Context } from "../../store/AuthContext";

import Navbar from "../../components/navbar";
import Modal from "./components/modal";
import { HomeStyled } from "./styled";



function HomePage(){
  const {modalOptionsClose, setmodalOptionsClose, config, setConfig} = useContext(Context);

  return(
    <>
      <Navbar />
      <HomeStyled>

        <div className="homepage-container">
          <div className="homepage-content">
            <h3 className="homepage-title">
              ⚡ Nenhum plano encontrado. Por favor escolha seu plano!
            </h3>

            <p className="homepage-text">
              Todas as ferramentas estão à sua disposição, escolha que direção você gostaria de tomar!
            </p>

            <div className="homepage-services">
              <div className="homepage-hosp">
                <FaServer size={28} color="#673de6" className="homepage-icon"/>
                <h5 className="homepage-titleContainer">Hospedagem de Site Compartilhada</h5>
                <small className="homepage-small">
                  <span>Perfeito para sites pequenos e médios.</span>
                </small>
                <small className="homepage-small">
                  <span>A partir de R$6.99/mês</span>
                </small>
                <button
                  className="homepage-buttonContainer"
                  onClick={() => {
                    setmodalOptionsClose(true);
                    setConfig({title: "Hospedagem de Site", value: 6.99})}
                  }
                  type="submit">
                    Comece
                  </button>
              </div>

              <div className="homepage-hosp">
                <FaCloud size={28} color="#673de6" className="homepage-icon"/>
                <h5 className="homepage-titleContainer">Hospedagem Cloud</h5>
                <small className="homepage-small">
                  <span>Para projetos de maior escala e sites de alto nível de tráfego.</span>
                </small>
                <small className="homepage-small">
                  <span>A partir de R$51.99/mês</span>
                </small>
                <button
                  className="homepage-buttonContainer"
                  onClick={() => {
                    setmodalOptionsClose(true);
                    setConfig({title: "Hospedagem Cloud", value: 51.99})}
                  }
                  type="submit">
                    Comece
                  </button>
              </div>

              <div className="homepage-hosp">
              <FaHdd size={28} color="#673de6" className="homepage-icon"/>
                <h5 className="homepage-titleContainer">Hospedagem VPS</h5>
                <small className="homepage-small">
                  <span>Recursos dedicados para permitir que suas aplicações cresçam.</span>
                </small>
                <small className="homepage-small">
                  <span>A partir de R$16.99/mês</span>
                </small>
                <button
                  className="homepage-buttonContainer"
                  onClick={() => {
                    setmodalOptionsClose(true);
                    setConfig({title: "VPS", value: 16.99})}
                  }
                  type="submit">
                    Comece
                  </button>
              </div>

              <div className="homepage-hosp">
                <FaGlobeAfrica size={28} color="#673de6" className="homepage-icon"/>
                <h5 className="homepage-titleContainer">Domínios</h5>
                <small className="homepage-small">
                  <span>Encontre o nome perfeito para o seu website.</span>
                </small>
                <small className="homepage-small">
                  <span>A partir de R$4.99/ano</span>
                </small>
                <button
                  className="homepage-buttonContainer"
                  onClick={() => {
                    setmodalOptionsClose(true);
                    setConfig({title: "Domínios", value: 4.99})}
                  }
                  type="submit">
                    Comece
                  </button>
              </div>

            </div>
          </div>
        </div>
        {modalOptionsClose && <Modal config={config} />}
      </HomeStyled>
    </>
  )
}

export default HomePage;
