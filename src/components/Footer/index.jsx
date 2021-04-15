import React from "react";

import footerLogo from "../../assets/img/Logo-footer.png";
import { Container, Title } from "./styles";

const Footer = () => {
  return (
    <>
      <Container>
        <img src={footerLogo} alt="" />
        <div className="row">
          <div>
            <Title>contato</Title>
            <a href="mailto:suporte@wongames.gg">suporte@wongames.gg</a>
            <a href="tel:+552133283719">+55 21 33283719</a>
          </div>

          <div>
            <Title>nos acompanhe</Title>
            <a href="x" target="_blank">
              Instagram
            </a>
            <a href="x" target="_blank">
              Twitter
            </a>
            <a href="x" target="_blank">
              YouTube
            </a>
            <a href="x" target="_blank">
              Facebook
            </a>
          </div>
        </div>

        <div className="row">
          <div>
            <Title>links</Title>
            <a href="x">Loja</a>
            <a href="x">Explorar</a>
            <a href="x">Buscar</a>
            <a href="x">FAQ</a>
          </div>

          <div>
            <Title>localização</Title>
            <a href="x" target="_blank">
              <span>Rua 7 de Maio</span>
              <span>527 - 89020330</span>
              <span>Rio de Janeiro, Brasil</span>
            </a>
          </div>
        </div>

        <span className="rights">
          Won Games 2020 © Todos os Direitos Reservados
        </span>
      </Container>
    </>
  );
};

export default Footer;
