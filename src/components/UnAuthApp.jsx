import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "./Loading/Loading";

// lazy loading components
const Login = lazy(() => import("./Login/Login"));
const Register = lazy(() => import("./Register/Register"));
const NotFound = lazy(() => import("./NotFoundPage/NotFoundPage"));

const UnAuthApp = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default UnAuthApp;
