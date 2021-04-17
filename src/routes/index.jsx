import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  );
};

export default Routes;
