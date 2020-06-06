import React, { useContext } from "react";

// importing Components
import UnAuthApp from "./components/UnAuthApp";
import AuthApp from "./components/AuthApp";

// importing context consumer
import { AuthContext } from "./context/Auth.context";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) return <AuthApp />;

  return <UnAuthApp />;
};

export default App;
