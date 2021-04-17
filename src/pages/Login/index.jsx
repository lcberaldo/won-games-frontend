import React from "react";
import { Link } from "react-router-dom";

import { FiMail } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";

import { Container } from "./styles";
import logo from "../../assets/img/Logo-login.png";

const Login = () => {
  return (
    <>
      <Container>
        <img src={logo} alt="WON Games" />

        <h2>Entrar</h2>

        <div className="input">
          <FiMail />
          <input type="email" name="email" id="" placeholder="Email" />
        </div>

        <div className="input">
          <AiOutlineLock />
          <input type="password" name="pass" id="" placeholder="Senha" />
        </div>

        <button className="forgot">Esqueceu sua senha?</button>

        <input type="submit" className="btn-cta" value="Entrar" />

        <span className="mini">
          Ainda não tem uma conta?
          <Link to="/signup" className="signup">
            Cadastre-se
          </Link>
        </span>
      </Container>
    </>
  );
};

export default Login;
