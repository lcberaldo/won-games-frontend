import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import api from "../../services/api";

import { FiMail } from "react-icons/fi";
import { BsPersonBoundingBox } from "react-icons/bs";
import {
  AiOutlineLock,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";

import { Container } from "./styles";
import logo from "../../assets/img/Logo-login.png";

const schema = Yup.object().shape({
  name: Yup.string().required("Nome obrigatório"),
  email: Yup.string()
    .required("E-mail obrigatório")
    .email("Digite um e-mail válido"),
  password: Yup.string().min(6, "No mínimo 6 caracteres"),
});

const Signup = () => {
  const [isHidden, setHidden] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    setNameError(false);
    setEmailError(false);
    setPassError(false);

    try {
      const user = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.pass.value,
      };

      await schema.validate(user, {
        abortEarly: false,
      });

      const response = await api.post("/user/create/", user);

      console.log(response);
    } catch (err) {
      console.log(err);
      const errors = err.inner;

      errors.forEach((e) => {
        if (e.message === "Nome obrigatório") {
          setNameError(e.message);
        }
        if (
          e.message === "E-mail obrigatório" ||
          e.message === "Digite um e-mail válido"
        ) {
          setEmailError(e.message);
        }
        if (e.message === "No mínimo 6 caracteres") {
          setPassError(e.message);
        }
      });
    }
  }, []);

  return (
    <>
      <Container>
        <img src={logo} alt="WON Games" />

        <h2>Criar conta</h2>

        <form onSubmit={handleSubmit}>
          <div className="input">
            <BsPersonBoundingBox />
            <input type="text" name="name" id="" placeholder="Nome Completo" />
            {nameError && <p>{nameError}</p>}
          </div>

          <div className="input">
            <FiMail />
            <input type="email" name="email" id="" placeholder="Email" />
            {emailError && <p>{emailError}</p>}
          </div>

          <div className="input">
            <AiOutlineLock />
            <input
              type={isHidden ? "password" : "text"}
              name="pass"
              id=""
              placeholder="Senha"
            />
            {passError && <p>{passError}</p>}

            <button className="right" onClick={() => setHidden(!isHidden)}>
              {isHidden ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

          <input type="submit" className="btn-cta" value="Criar conta" />
        </form>

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
