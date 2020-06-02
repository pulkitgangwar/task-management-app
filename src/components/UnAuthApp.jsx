import React from "react";
import { Switch, Route } from "react-router-dom";

// importing Components
import Login from "./Login/Login";
import Register from "./Register/Register";

const UnAuthApp = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact render={() => <h1>Page Not Found</h1>} />
    </Switch>
  );
};

export default UnAuthApp;
