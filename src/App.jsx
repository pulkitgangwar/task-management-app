import React, { useContext } from "react";

// importing Components
import UnAuthApp from "./components/UnAuthApp";

// importing context consumer
import { Auth } from "./context/Auth.context";

const App = () => {
  return <UnAuthApp />;
};

export default App;
