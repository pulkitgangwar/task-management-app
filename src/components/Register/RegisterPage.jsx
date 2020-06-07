import React from "react";
import SideBar from "../SideBar";
import RegisterForm from "./RegisterForm";

/**
 *  Registration Page Component
 */
const RegisterPage = () => {
  return (
    <div className="register">
      <div className="register__sidebar">
        <SideBar />
      </div>

      <div className="register__form">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
