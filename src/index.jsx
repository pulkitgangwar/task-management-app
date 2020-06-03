import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// importing auth context provider
import AuthProvider from "./context/Auth.context";

// importing App
import App from "./App";

// importing stylesheet
import "./sass/main.scss";

render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>,
  document.getElementById("root")
);
