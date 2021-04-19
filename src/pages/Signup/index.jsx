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

const Signup = () => {
  const [isHidden, setHidden] = useState(true);

  const handleSubmit = useCallback(async (data) => {
    data.preventDefault();

    try {
      const user = {
        name: data.target[0].value,
        email: data.target[1].value,
        password: data.target[2].value,
      };

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().min(6, "No mínimo 6 caracteres"),
      });

      await schema
        .validate(user, {
          abortEarly: false,
        })
        .catch(function (err) {
          const errors = err.errors;
          console.log(errors);
        });
    } catch (err) {
      console.log(err);
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
            <input type="text" name="email" id="" placeholder="Nome Completo" />
          </div>

          <div className="input">
            <FiMail />
            <input type="email" name="email" id="" placeholder="Email" />
          </div>

          <div className="input">
            <AiOutlineLock />
            <input
              type={isHidden ? "password" : "text"}
              name="pass"
              id=""
              placeholder="Senha"
            />
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
