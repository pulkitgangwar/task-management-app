import React from "react";
import { Switch, Route } from "react-router-dom";

// importing Components
import Login from "./Login/index";

const UnAuthApp = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" render={() => <h1>Register</h1>} />
      <Route exact render={() => <h1>Page Not Found</h1>} />
    </Switch>
  );
};

export default UnAuthApp;
