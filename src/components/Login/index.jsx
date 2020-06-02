import React from "react";

// importing Components
import SideBar from "../SideBar";
import Form from "./Form";

const Login = () => {
  return (
    <div className="login">
      <div className="login__sidebar">
        <SideBar />
      </div>

      <div className="login__form">
        <Form />
      </div>
    </div>
  );
};

export default Login;
