import React, { useState } from "react";

import { BsHeartFill, BsHeart } from "react-icons/bs";
import { Container } from "./styles";

const GameCard = ({ gameImg, title, subTitle, price }) => {
  const [isLiked, setLiked] = useState(false);

  return (
    <>
      <Container>
        <img src={gameImg} alt="game name" />

        <div>
          <span className="title">{title}</span>
          <span className="sub">{subTitle}</span>
          <button onClick={() => setLiked(!isLiked)} className="like">
            {isLiked ? <BsHeartFill /> : <BsHeart />}
          </button>
          <button className="price-btn">R${price}</button>
        </div>
      </Container>
    </>
  );
};

export default GameCard;
