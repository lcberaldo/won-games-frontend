import React from "react";

import { GoSearch } from "react-icons/go";
import { VscListFilter } from "react-icons/vsc";
import { BsChevronDown } from "react-icons/bs";

import bannerTeste from "../../assets/img/banner-explore.png";

import { Container, LoadMoreButton } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GameCard from "../../components/GameCard";

const Explore = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="header">
          <div className="search-bar">
            <input
              type="text"
              name="search"
              id=""
              placeholder="O que você procura?"
            />
            <button>
              <GoSearch />
            </button>
          </div>
          <button>
            <VscListFilter />
          </button>
        </div>

        <GameCard
          gameImg={bannerTeste}
          title={"Population Zero"}
          subTitle={"Other Ocean"}
          price={"215,00"}
        />

        <GameCard
          gameImg={bannerTeste}
          title={"Population Zero"}
          subTitle={"Other Ocean"}
          price={"215,00"}
        />

        <LoadMoreButton>
          <span>carregar mais</span>
          <BsChevronDown />
        </LoadMoreButton>
      </Container>
      <Footer />
    </>
  );
};

export default Explore;
