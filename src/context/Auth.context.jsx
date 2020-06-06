import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("access")) ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("access")) {
      setIsLoggedIn(true);
      return;
    }
    setIsLoggedIn(false);
  }, []);

  const onLogin = (accessToken) => {
    localStorage.setItem("access", JSON.stringify(accessToken));
    setIsLoggedIn(true);
    history.push("/");
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, onLogin, logout }} {...props} />
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export default AuthProvider;
