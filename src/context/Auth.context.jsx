import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

// importing AuthClient
import AuthClient from "../Utils/AuthClient";

export const Auth = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn] = useState(localStorage.getItem("access") ? true : false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { push } = useHistory();

  const register = async (name, email, password) => {
    try {
      console.log(name, email, password);
      const authClient = new AuthClient();
      setLoading(true);
      await authClient.register(name, email, password);
      setLoading(false);
      setError(null);
      console.log("near push");
      push("/");
    } catch (err) {
      console.log("catch block ran");
      console.log(err);
      setError(err);
      setLoading(false);
      console.log("catch ran");
      console.log(err);
    }
  };

  const login = (email, password) => {
    console.log(email, password);
  };

  const logout = () => {
    console.log("log out!");
  };

  return (
    <Auth.Provider
      value={{ isLoggedIn, login, logout, register, loading, error }}
    >
      {children}
    </Auth.Provider>
  );
};

export default AuthProvider;
