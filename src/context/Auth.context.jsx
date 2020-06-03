import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

// importing AuthClient
import AuthClient from "../Utils/AuthClient";

export const Auth = createContext();

const AuthProvider = ({ children }) => {
  const authClient = new AuthClient();

  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("access")) || null
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { push } = useHistory();

  const checkIsLoggedIn = () => {
    if (localStorage.getItem("access")) {
      setIsLoggedIn(JSON.parse(localStorage.getItem("access")));
      return;
    }

    setIsLoggedIn(null);
  };

  const register = async (name, email, password) => {
    try {
      console.log(name, email, password);
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

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await authClient.login(email, password);
      setLoading(false);
      setError(false);
      localStorage.setItem("access", JSON.stringify(response));
      checkIsLoggedIn();
    } catch (err) {
      checkIsLoggedIn();
      setError(err);
      setLoading(false);
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.clear();
    checkIsLoggedIn();
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
