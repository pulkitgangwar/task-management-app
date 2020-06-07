import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Create Context
export const AuthContext = createContext();

/**
 * Auth Context Provider to manage logged-in user
 */
const AuthProvider = (props) => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("access")) ? true : false
  );

  /**
   *  Check for access token on component mount
   */
  useEffect(() => {
    if (localStorage.getItem("access")) {
      setIsLoggedIn(true);
      return;
    }
    setIsLoggedIn(false);
  }, []);

  /**
   *  Store access token in localStorage and login user
   */
  const onLogin = (accessToken) => {
    localStorage.setItem("access", JSON.stringify(accessToken));
    setIsLoggedIn(true);
    history.push("/");
  };

  /**
   *  Clear localStorage and logout user
   */
  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, onLogin, logout }} {...props} />
  );
};

/**
 * AuthContext Consumer Hook
 * @returns AuthContext
 */
export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export default AuthProvider;
