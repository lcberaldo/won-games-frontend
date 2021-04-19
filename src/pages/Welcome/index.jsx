import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import { CgProfile } from "react-icons/cg";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RiKeyFill } from "react-icons/ri";
import { IoExitOutline } from "react-icons/io5";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Welcome = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Minha conta</h2>

        <div className="box">
          <Link className="link">
            <CgProfile />
            <span>Meu perfil</span>
          </Link>

          <Link className="link">
            <BsCreditCard />
            <span>Meus cartões</span>
          </Link>

          <Link className="link">
            <AiOutlineUnorderedList />
            <span>Histórico de compras</span>
          </Link>

          <Link className="link">
            <RiKeyFill />
            <span>Alterar senha</span>
          </Link>

          <Link className="link">
            <IoExitOutline />
            <span>Sair</span>
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Welcome;
