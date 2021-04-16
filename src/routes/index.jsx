import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Explore from "../pages/Explore";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/explore" component={Explore} />
    </Switch>
  );
};

export default Routes;
