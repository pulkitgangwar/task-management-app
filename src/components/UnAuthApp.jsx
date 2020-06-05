import React from "react";
import { Switch, Route } from "react-router-dom";

// importing Components
import Login from "./Login/Login";
import Register from "./Register/Register";
import NotFound from "./NotFoundPage/NotFoundPage";

const UnAuthApp = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route
        exact
        render={() => (
          <NotFound
            description="404 Page Not Found"
            path="/"
            linkTitle="Home"
          />
        )}
      />
    </Switch>
  );
};

export default UnAuthApp;
