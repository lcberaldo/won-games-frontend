import styled, { css } from "styled-components";
import bannerLg from "../../assets/img/bg-carousel-releases.png";

export const Container = styled.div`
  margin-top: 50px;
  @media (min-width: 1100px) {
    width: 1078px;

    .bg-lg {
      display: none;
      height: 650px;
      width: 100%;
      position: absolute;
      background-image: url(${bannerLg});
      background-repeat: no-repeat;
      background-size: cover;
      left: 0;
      bottom: -182px;
    }

    ${(props) =>
      props.isRelease &&
      css`
        width: 100%;
        .bg-lg {
          display: block;
        }
      `}
  }
`;

export const SectionTitle = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #fafafa;
  display: flex;
  align-items: center;
  margin: 0 20px 20px 20px;

  @media (min-width: 1100px) {
    margin-left: 0;
    position: relative;
    z-index: 2;
  }

  &::before {
    display: inline-block;
    content: "";
    height: 24px;
    width: 7px;
    background: #35bdac;
    margin-right: 10px;
  }
`;

export const CarouselContainer = styled.div`
  padding-left: 20px;

  .slick-slide {
    padding-right: 24px;
  }

  @media (min-width: 1100px) {
    padding-left: unset;
    position: relative;
    z-index: 2;

    .slick-slide {
      padding-right: 40px;
    }

    .slick-prev {
      display: none !important;
    }
  }
`;

export const Banner = styled.div`
  height: 230px;
  position: relative;
  margin-bottom: 24px;

  img {
    width: 100%;
    height: 100%;
  }

  div {
    width: 62%;
    position: absolute;
    top: 20px;
    right: 20px;
    color: #ffffff;
    .title {
      font-weight: 600;
      font-size: 16px;
      line-height: 27px;
    }
    .sub {
      font-weight: 300;
      font-size: 12px;
      line-height: 21px;
    }
    .buy-btn {
      background: linear-gradient(
        178.59deg,
        #ff5f5f -14.51%,
        #f062c0 102.86%,
        #f23131 102.86%
      );
      border-radius: 4px;
      padding: 10px 15px;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #ffffff;
      margin: 15px 0 auto auto;
      display: block;
    }
  }
`;
