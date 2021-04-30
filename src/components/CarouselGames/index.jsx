import React, { useEffect, useRef } from "react";
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
  const custom_settings = {
    arrows: true,
    infinite: false,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1100,
        arrows: false,
        settings: { slidesToShow: 1.2, slidesToScroll: 1, arrows: false },
      },
    ],
  };

  let isRelease;

  if (sectionTitle === "New Releases") {
    isRelease = true;
  }

  return (
    <>
      <Container isRelease={isRelease}>
        <div className="bg-lg"></div>

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
          <Slider {...custom_settings}>
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
