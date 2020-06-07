import React from "react";
import SideBar from "../SideBar";
import LoginForm from "./LoginForm";

/**
 *  Login Page Component
 */
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
