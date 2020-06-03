import React, { useContext } from "react";

// importing Components
import UnAuthApp from "./components/UnAuthApp";
import AuthApp from "./components/AuthApp";

// importing context consumer
import { Auth } from "./context/Auth.context";

const App = () => {
  const { isLoggedIn } = useContext(Auth);

  return <>{isLoggedIn ? <AuthApp /> : <UnAuthApp />}</>;
};

export default App;
