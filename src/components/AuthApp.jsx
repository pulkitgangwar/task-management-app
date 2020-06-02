import React from "react";
import { Switch, Route } from "react-router-dom";

// importing Components
import Dashboard from "./Dashboard/Dashboard";
import AddTask from "./AddTask/AddTask";

const AuthApp = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/addtask" component={AddTask} />
      <Route exact render={() => <h1>Page Not Found</h1>} />
    </Switch>
  );
};

export default AuthApp;
