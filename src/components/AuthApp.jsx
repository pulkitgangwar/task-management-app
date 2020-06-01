import React from "react";
import { Switch, Route } from "react-router-dom";

// importing Components
import Dashboard from "./Dashboard/index";

const AuthApp = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact render={() => <h1>Page Not Found</h1>} />
    </Switch>
  );
};

export default AuthApp;
