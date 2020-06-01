import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// importing App
import App from "./App";

// importing stylesheet
import "./sass/main.scss";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
