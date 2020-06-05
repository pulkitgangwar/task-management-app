import React from "react";
import { Switch, Route } from "react-router-dom";

// importing Components
import Dashboard from "./Dashboard/Dashboard";
import AddTask from "./AddTask/AddTask";
import EditTask from "./EditTask/EditTask";
import SingleTask from "./SingleTask/SingleTask";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

const AuthApp = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/addtask" component={AddTask} />
      <Route exact path="/edittask/:id" component={EditTask} />
      <Route exact path="/tasks/:id" component={SingleTask} />
      <Route
        exact
        render={() => (
          <NotFoundPage
            description="404 Page Not Found"
            path="/"
            linkTitle="Home"
          />
        )}
      />
    </Switch>
  );
};

export default AuthApp;
