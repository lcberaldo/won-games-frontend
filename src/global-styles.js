import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #06092b;
    -webkit-font-smoothing: antialiased;
    font-family: Poppins;
    font-size: 16px;

 
  }

  span {
    display: block;
  }

 
  button {
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
  }

`;

export default GlobalStyle;
