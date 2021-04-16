import styled from "styled-components";

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
`;

export const ItemContainer = styled.div`
  img {
    height: 231px;
  }

  div {
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
`;
