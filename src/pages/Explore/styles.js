import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .search-bar {
      padding: 10px;
      background: #2e2f42;
      border-radius: 2px;
      width: 85%;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        background: transparent;
        flex: 1;
        border: none;
        outline: none;
        height: 20px;
        font-size: 14px;
        color: #8f8f8f;

        &::placeholder {
          font-size: 14px;
          line-height: 21px;
          color: #8f8f8f;
        }
      }

      button {
        color: #dadada;
        font-size: 15px;
      }
    }

    button {
      font-size: 38px;
      color: #dadada;
    }
  }

  .kOFsPZ {
    img {
      height: 152px;
    }

    & + div {
      margin-top: 20px;
    }
  }
`;

export const LoadMoreButton = styled.button`
  margin: 50px auto 0 auto;
  display: block;
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #fafafa;
    font-family: Poppins;
  }

  svg {
    color: #f231a5;
    font-size: 30px;
  }
`;
