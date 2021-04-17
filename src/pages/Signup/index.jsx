import React from "react";
import { Link } from "react-router-dom";

import { FiMail } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";

import { Container } from "./styles";
import logo from "../../assets/img/Logo-login.png";

const Signup = () => {
  return (
    <>
      <Container>
        <img src={logo} alt="WON Games" />

        <h2>Criar conta</h2>

        <div className="input">
          <FiMail />
          <input type="email" name="email" id="" placeholder="Email" />
        </div>

        <div className="input">
          <AiOutlineLock />
          <input type="password" name="pass" id="" placeholder="Senha" />
        </div>

        <div className="input">
          <AiOutlineLock />
          <input
            type="password"
            name="pass-check"
            id=""
            placeholder="Confirmar senha"
          />
        </div>

        <input type="submit" className="btn-cta" value="Criar conta" />

        <span className="mini">
          Já tem uma conta?
          <Link to="/login" className="signup">
            Entrar
          </Link>
        </span>
      </Container>
    </>
  );
};

export default Signup;
