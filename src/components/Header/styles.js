import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  margin-bottom: 50px;

  .mid-btn {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  .user,
  .lg-nav {
    display: none;
  }

  .right-btns {
    width: 25%;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1100px) {
    max-width: 90%;
    margin: 0 auto;

    .mid-btn,
    .menu-btn {
      display: none;
    }

    .lg-nav {
      width: 300px;
      display: flex;
      align-items: inherit;
      justify-content: space-between;

      a {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #fafafa;
        text-decoration: none;
        border-bottom: 3px solid transparent;
      }
    }

    .right-btns {
      width: 250px;
      .user {
        display: flex;
        align-items: center;
        position: relative;
        span {
          margin-left: 10px;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #fafafa;
        }

        .icon-down {
          font-size: 24px;
          color: #fafafa;
          margin-left: 10px;
        }
      }
    }

    ${(props) =>
      props.isPage === "/explore"
        ? css`
            .lg-nav {
              a:last-of-type {
                border-color: #f231a5;
              }
            }
          `
        : css`
            .lg-nav {
              a:first-of-type {
                border-color: #f231a5;
              }
            }
          `}
  }
`;

export const MenuScreen = styled.div`
  width: 0;
  height: 100vh;
  background: white;
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 20;
  transition: all 0.5s ease-in-out;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;

  ${(props) =>
    props.isOpen &&
    css`
      width: 100vw;
      transition: all 0.3s ease-in-out;
      left: 0px;
    `}
  ${(props) =>
    props.isPage === "/explore"
      ? css`
          .links {
            a:last-child {
              border-bottom: 3px solid #f231a5;
            }
          }
        `
      : css`
          .links {
            a:first-child {
              border-bottom: 3px solid #f231a5;
            }
          }
        `}


    div {
    position: relative;
    top: 0px;
    text-align: center;
    a {
      display: block;
    }
  }

  .links {
    a {
      display: flex;
      justify-content: center;
      font-family: Poppins;
      font-weight: 600;
      font-size: 28px;
      line-height: 42px;
      color: #000;
      text-decoration: none;

      &:hover {
        border-bottom: 3px solid #f231a5;
      }
    }
  }

  .login {
    background: linear-gradient(
      178.59deg,
      #ff5f5f -14.51%,
      #f062c0 102.86%,
      #f23131 102.86%
    );
    border-radius: 4px;
    width: 277px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #fafafa;
  }

  span {
    display: block;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #5f5f5f;
    margin: 10px 0;
  }

  .signup {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    font-size: 16px;
    color: #f231a5;
  }

  .close {
    position: absolute;
    right: 30px;
    top: 30px;
  }

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const DropdownProfile = styled.div`
  width: 224px;
  padding: 15px 0;
  background: #fafafa;
  position: absolute;
  top: 170%;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;

  a {
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #030517;
    text-decoration: none;
    padding: 10px 15px;
    position: relative;
    z-index: 2;
    &:hover {
      background: #f231a5;
      color: white;
    }

    svg {
      margin-right: 10px;
    }
  }

  .detail {
    width: 50px;
    height: 50px;
    background: #fafafa;
    position: absolute;
    right: 30px;
    top: -10px;
    transform: rotate(-45deg);
    z-index: 1;
  }
`;
