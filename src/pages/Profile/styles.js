import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #fafafa;
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

  .box {
    border-radius: 4px;
    margin-bottom: 150px;
    .link {
      padding: 20px;
      background: #fafafa;
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 24px;
      color: #030517;
      text-decoration: none;

      span {
        margin-left: 15px;
      }
    }
  }
`;
