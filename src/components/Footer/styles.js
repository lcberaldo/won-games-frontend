import styled from "styled-components";
import footerBg from "../../assets/img/Footer.png";

export const Container = styled.div`
  background: url("${footerBg}");
  margin-top: 100px;
  width: 100%;
  position: relative;
  bottom: 0;
  z-index: 5;
  padding: 20px;
  padding-top: 60px;

  img {
    margin-top: 20px;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 0.9fr;
    margin-top: 25px;

    div {
      display: flex;
      flex-direction: column;

      a {
        font-size: 13px;
        line-height: 21px;
        color: #666666;
        text-decoration: none;
        span {
          display: block;
        }
      }
    }
  }

  .rights {
    display: block;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #666666;
    margin-top: 30px;
  }
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  text-transform: uppercase;

  &::after {
    content: "";
    display: block;
    width: 34px;
    height: 4px;
    background: #3cd3c1;
    margin-bottom: 15px;
  }
`;
