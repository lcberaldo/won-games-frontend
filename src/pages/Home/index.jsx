import React from "react";
import Slider from "react-slick";

import bannerTeste from "../../assets/img/banner-teste.png";
import bannerHome from "../../assets/img/banner-home.png";
import {
  CarouselContainer,
  ItemContainer,
  ContainerLg,
  BannerDetail,
} from "./styles";
import CarouselGames from "../../components/CarouselGames";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />
      <ContainerLg>
        <CarouselContainer>
          <Slider {...settings}>
            <ItemContainer>
              <img src={bannerHome} alt="" />

              <BannerDetail>
                <span>New release</span>
              </BannerDetail>

              <div className="caption">
                <span className="title">Desafie a morte</span>
                <p>
                  Jogue a nova temporada de{" "}
                  <span className="color">Crashlands</span>
                </p>

                <button className="btn-cta">Comprar agora</button>
              </div>
            </ItemContainer>

            <ItemContainer>
              <img src={bannerHome} alt="" />

              <BannerDetail>
                <span>New release</span>
              </BannerDetail>

              <div className="caption">
                <span className="title">Desafie a morte</span>
                <p>
                  Jogue a nova temporada de{" "}
                  <span className="color">Crashlands</span>
                </p>

                <button className="btn-cta">Comprar agora</button>
              </div>
            </ItemContainer>
          </Slider>
        </CarouselContainer>

        <CarouselGames sectionTitle="New Releases" hasBanner={false} />

        <CarouselGames
          sectionTitle="Mais populares"
          hasBanner={true}
          bannerImg={bannerTeste}
          bannerTitle="Read Dead está de de volta!"
          bannerDescription="Venha conhecer as novas aventuras de John Marston"
        />
      </ContainerLg>

      <Footer />
    </>
  );
};

export default Home;
