import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "./Loading/Loading";

/**
 *  Lazy Loading components for Code-Splitting
 */
const LoginPage = lazy(() => import("./Login/LoginPage"));
const RegisterPage = lazy(() => import("./Register/RegisterPage"));
const NotFound = lazy(() => import("./NotFoundPage/NotFoundPage"));

/**
 *  Routes for logged-out users
 */
const UnAuthApp = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default UnAuthApp;
