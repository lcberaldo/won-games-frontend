import styled from "styled-components";
import bannerDetail from "../../assets/img/banner-home-detail.png";

export const CarouselContainer = styled.div`
  .slick-dots {
    margin-top: 20px;
    position: unset;
    bottom: unset;
    .slick-active {
      button::before {
        color: #f231a5;
      }
    }

    li {
      margin: unset;
      button::before {
        color: white;
        font-size: 12px;
        opacity: 1;
      }
    }
  }

  @media (min-width: 1100px) {
    width: 1148px;
    margin: 0 auto;
    position: relative;
    z-index: 2;

    .slick-dots {
      position: absolute;
      right: 0;
      transform: translate(-50%, 0) rotate(90deg);
      bottom: 50%;
      width: unset;
    }
  }
`;

export const ItemContainer = styled.div`
  img {
    height: 231px;
  }

  .caption {
    color: #fafafa;
    padding: 20px;
    background: #2e2f42;
    .title {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
    }
    p {
      font-size: 14px;
      line-height: 21px;
      margin-bottom: 15px;
      .color {
        padding-left: 5px;
        display: inline-block;
        font-weight: bold;
        color: #f231a5;
      }
    }

    .btn-cta {
      background: linear-gradient(
        178.59deg,
        #ff5f5f -14.51%,
        #f062c0 102.86%,
        #f23131 102.86%
      );
      border-radius: 4px;
      padding: 10px 20px;
      font-size: 14px;
      font-weight: bold;
      line-height: 21px;
      color: #fafafa;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 1100px) {
    position: relative;

    img {
      height: unset;
      width: 1042px;
    }

    .caption {
      position: absolute;
      width: 1042px;
      height: 199px;
      z-index: 2;
      bottom: 0px;
      padding: 32px 45px;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 4px;

      .title {
        font-size: 28px;
        line-height: 42px;
      }

      p {
        font-size: 20px;
        line-height: 30px;
      }
    }
  }
`;

export const BannerDetail = styled.div`
  display: none;

  @media (min-width: 1100px) {
    position: absolute;
    right: 90px;
    top: 50px;
    width: 138px !important;
    background-image: url(${bannerDetail}) !important;
    background-size: cover;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: #fafafa;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.05em;
      position: relative;
      top: -5px;
    }
  }
`;

export const ContainerLg = styled.div`
  @media (min-width: 1100px) {
    width: 1148px;
    margin: 0 auto;
  }
`;
