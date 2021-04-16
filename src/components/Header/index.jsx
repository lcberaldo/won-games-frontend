import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import { Link } from "react-router-dom";

import { Container, MenuScreen } from "./styles";
import menuIcon from "../../assets/icons/Menu.svg";
import closeIcon from "../../assets/icons/Close.svg";
import logo from "../../assets/img/Logo.svg";
import cartIcon from "../../assets/icons/Cart.svg";
import searchIcon from "../../assets/icons/Search.svg";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  isMenuOpen ? disableBodyScroll(document) : enableBodyScroll(document);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <Container>
        <button onClick={toggleMenu}>
          <img src={menuIcon} alt="" />
        </button>

        <Link to="/" className="mid-btn">
          <img src={logo} alt="" />
        </Link>

        <div>
          <button>
            <img src={searchIcon} alt="" />
          </button>
          <button>
            <img src={cartIcon} alt="" />
          </button>
        </div>
      </Container>

      <MenuScreen isOpen={isMenuOpen} isPage={location.pathname}>
        <button onClick={toggleMenu} className="close">
          <img src={closeIcon} alt="" />
        </button>

        <div className="links">
          <Link to="/">Início</Link>
          <Link to="/explore">Explorar</Link>
        </div>

        <div>
          <Link className="login" to="/">
            Entrar
          </Link>

          <span>ou</span>

          <Link className="signup" to="/">
            Crie sua conta
          </Link>
        </div>
      </MenuScreen>
    </>
  );
};

export default Header;
