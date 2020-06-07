import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./context/Auth.context";
import App from "./App";

// importing main stylesheet
import "./sass/main.scss";

render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>,
  document.getElementById("root")
);
