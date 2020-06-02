import React from "react";

// importing Components
import SideBar from "../SideBar";
import Form from "./RegisterForm";

const Register = () => {
  return (
    <div className="register">
      <div className="register__sidebar">
        <SideBar />
      </div>

      <div className="register__form">
        <Form />
      </div>
    </div>
  );
};

export default Register;
