import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./global-styles";
import Routes from "./routes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
