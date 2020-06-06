import React from "react";

// importing Components
import SideBar from "../SideBar";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login__sidebar">
        <SideBar />
      </div>

      <div className="login__form">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
