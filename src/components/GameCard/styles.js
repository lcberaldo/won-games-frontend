import styled from "styled-components";

export const Container = styled.div`
  background: white;
  border-radius: 2px;

  img {
    width: 100%;
    height: 129px;
  }

  div {
    position: relative;
    padding: 10px 15px;
    height: 90px;

    .title {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #030517;
    }

    .sub {
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      color: #bbbbbb;
    }

    .like {
      position: absolute;
      right: 15px;
      top: 15px;
      font-size: 18px;
      color: #f231a5;
    }

    .price-btn {
      display: block;
      background: #3cd3c1;
      border-radius: 2px;
      padding: 3px 5px;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #fff;
      margin: 0 0 0 auto;
    }
  }
`;
