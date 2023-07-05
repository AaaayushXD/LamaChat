import React, { useContext } from "react";
import { UserContextProvider } from "./components/login/UserContext";
import axios from "axios";
import Routes from "./components/routes/Routes";

const BASE_URL = "https://lamachat-server.onrender.com";
function App() {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
