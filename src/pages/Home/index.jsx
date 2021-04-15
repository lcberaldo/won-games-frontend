import React from "react";

import bannerTeste from "../../assets/img/banner-teste.png";
import CarouselGames from "../../components/CarouselGames";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <CarouselGames sectionTitle="Lançamentos" hasBanner={false} />

      <CarouselGames
        sectionTitle="Mais populares"
        hasBanner={true}
        bannerImg={bannerTeste}
        bannerTitle="Read Dead está de de volta!"
        bannerDescription="Venha conhecer as novas aventuras de John Marston"
      />

      <Footer />
    </>
  );
};

export default Home;
