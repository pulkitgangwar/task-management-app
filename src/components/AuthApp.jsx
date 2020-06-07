import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "./Loading/Loading";

// Styles for react-datepicker and react-draft-wysiwyg
import "react-datepicker/dist/react-datepicker.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// lazy loading components
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const AddTask = lazy(() => import("./AddTask/AddTask"));
const EditTask = lazy(() => import("./EditTask/EditTask"));
// const SingleTask = lazy(() => import("./SingleTask/SingleTask"));
const NotFoundPage = lazy(() => import("./NotFoundPage/NotFoundPage"));

const AuthApp = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/new" component={AddTask} />
        <Route exact path="/edit/:id" component={EditTask} /> 
        {/* <Route exact path="/tasks/:id" component={SingleTask} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};

export default AuthApp;
