import React from "react";
import { Switch, Route } from "react-router-dom";

const AuthApp = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Dashboard</h1>} />
      <Route exact render={() => <h1>Page Not Found</h1>} />
    </Switch>
  );
};

export default AuthApp;
