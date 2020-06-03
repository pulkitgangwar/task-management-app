import React, { createContext, useState, useEffect } from "react";

export const Auth = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("access") ? true : false
  );

  const register = (name, email, password) => {
    console.log(name, email, password);
  };

  const login = (email, password) => {
    console.log(email, password);
  };

  const logout = () => {
    console.log("log out!");
  };

  return (
    <Auth.Provider value={{ isLoggedIn, login, logout, register }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthProvider;
