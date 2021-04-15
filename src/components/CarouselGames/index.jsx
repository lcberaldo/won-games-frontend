import React from "react";
import Slider from "react-slick";

import { Container, SectionTitle, Banner, CarouselContainer } from "./styles";
import cardImg from "../../assets/img/card.png";
import GameCard from "../../components/GameCard";

const CarouselGames = ({
  sectionTitle,
  hasBanner,
  bannerTitle,
  bannerImg,
  bannerDescription,
}) => {
  const settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
  };

  return (
    <>
      <Container>
        <SectionTitle>{sectionTitle}</SectionTitle>
        {hasBanner && (
          <Banner>
            <img src={bannerImg} alt="game name" />

            <div>
              <span className="title">{bannerTitle}</span>
              <span className="sub">{bannerDescription}</span>
              <button className="buy-btn">Comprar agora</button>
            </div>
          </Banner>
        )}

        <CarouselContainer>
          <Slider {...settings}>
            <GameCard
              gameImg={cardImg}
              title={"Population Zero"}
              subTitle={"Other Ocean"}
              price={"215,00"}
            />
            <GameCard
              gameImg={cardImg}
              title={"Population Zero"}
              subTitle={"Other Ocean"}
              price={"215,00"}
            />
            <GameCard
              gameImg={cardImg}
              title={"Population Zero"}
              subTitle={"Other Ocean"}
              price={"215,00"}
            />
          </Slider>
        </CarouselContainer>
      </Container>
    </>
  );
};

export default CarouselGames;
