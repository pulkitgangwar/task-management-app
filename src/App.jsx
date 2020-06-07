import React, { useContext } from "react";
import UnAuthApp from "./components/UnAuthApp";
import AuthApp from "./components/AuthApp";
import { AuthContext } from "./context/Auth.context";

/**
 *  Main App Component renders component tress according to login status
 */
const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) return <AuthApp />;

  return <UnAuthApp />;
};

export default App;
