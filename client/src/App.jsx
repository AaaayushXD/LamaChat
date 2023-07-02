import React, { useContext } from "react";
import { UserContextProvider } from "./components/login/UserContext";
import axios from "axios";
import Routes from "./components/routes/Routes";

function App() {
  axios.defaults.baseURL = "http://localhost:3001";
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>

  );
}

export default App;
