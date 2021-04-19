import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 30% 20px;
  height: 100vh;

  img {
    display: block;
    margin: 0 auto 70px auto;
  }

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #030517;
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    &::before {
      display: inline-block;
      content: "";
      height: 24px;
      width: 7px;
      background: #35bdac;
      margin-right: 10px;
    }
  }

  .input {
    height: 50px;
    background: #eaeaea;
    border-radius: 2px;
    position: relative;
    outline: none;

    .right {
      svg {
        left: unset;
        right: 10px;
      }
    }

    svg {
      font-size: 40px;
      position: absolute;
      left: 10px;
      top: 5px;
      color: #969696;
    }

    input {
      font-family: Poppins;
      height: 100%;
      width: 100%;
      background: none;
      border: none;

      padding-left: 70px;
      padding-right: 20px;
      font-size: 16px;
      color: #969696;

      &:focus {
        outline: 2px solid #f23131;
      }
      &::placeholder {
        font-size: 16px;
        font-weight: bold;
        color: #969696;
      }
    }

    & + div {
      margin-top: 15px;
    }
  }

  .forgot {
    font-family: Poppins;
    margin: 5px 0 0 auto;
    font-size: 12px;
    line-height: 18px;
    color: #030517;
    display: block;
  }

  .btn-cta {
    border: none;
    outline: none;
    display: block;
    width: 100%;
    padding: 20px;
    background: linear-gradient(
      178.59deg,
      #ff5f5f -14.51%,
      #f062c0 102.86%,
      #f23131 102.86%
    );
    font-family: Poppins;
    text-transform: uppercase;
    border-radius: 4px;
    margin-top: 50px;
    font-weight: 600;
    font-size: 16px;
    color: #fafafa;
    cursor: pointer;
  }

  .mini {
    margin-top: 5px;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    line-height: 18px;
    color: #030517;

    .signup {
      color: #35bdac !important;
      text-decoration: underline;
      margin-left: 5px;
    }
  }
`;
