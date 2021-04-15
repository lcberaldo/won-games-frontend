import styled, { css } from "styled-components";

export const Container = styled.div`
  & + div {
    margin-top: 50px;
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
