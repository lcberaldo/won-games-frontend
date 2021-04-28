import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import { Container, MenuScreen, DropdownProfile } from "./styles";

import { BsChevronDown, BsHeart } from "react-icons/bs";
import { MdExitToApp } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import logoWhite from "../../assets/img/Logo-white.png";
import userIcon from "../../assets/icons/User.svg";
import menuIcon from "../../assets/icons/Menu.svg";
import closeIcon from "../../assets/icons/Close.svg";
import logo from "../../assets/img/Logo.svg";
import cartIcon from "../../assets/icons/Cart.svg";
import searchIcon from "../../assets/icons/Search.svg";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLgMenuOpen, setLgMenuOpen] = useState(false);
  const location = useLocation();

  isMenuOpen ? disableBodyScroll(document) : enableBodyScroll(document);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleDropdown = () => {
      if (isLgMenuOpen) {
        setLgMenuOpen(false);
      }
    };

    document.addEventListener("click", handleDropdown);
    console.log(isLgMenuOpen);

    return () => {
      document.removeEventListener("click", handleDropdown);
    };
  }, [isLgMenuOpen]);

  return (
    <>
      <Container isPage={location.pathname}>
        <div className="lg-nav">
          <img src={logoWhite} alt="WON GAMES" />
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
        </div>

        <button className="menu-btn" onClick={toggleMenu}>
          <img src={menuIcon} alt="" />
        </button>

        <Link to="/" className="mid-btn">
          <img src={logo} alt="" />
        </Link>

        <div className="right-btns">
          <button>
            <img src={searchIcon} alt="" />
          </button>

          <button>
            <img src={cartIcon} alt="" />
          </button>

          <button onClick={() => setLgMenuOpen(!isLgMenuOpen)} className="user">
            <img src={userIcon} alt="" />
            <span>UserName</span>
            <BsChevronDown className="icon-down" />
            {isLgMenuOpen && (
              <DropdownProfile>
                <div className="detail"></div>

                <Link>
                  <CgProfile />
                  Minha conta
                </Link>

                <Link>
                  <BsHeart />
                  Meu perfil
                </Link>

                <Link>
                  <MdExitToApp />
                  Sair
                </Link>
              </DropdownProfile>
            )}
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
          <Link to="/login" className="login">
            Entrar
          </Link>

          <span>ou</span>

          <Link className="signup" to="/signup">
            Crie sua conta
          </Link>
        </div>
      </MenuScreen>
    </>
  );
};

export default Header;
