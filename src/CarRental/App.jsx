import React, { useEffect, useState } from "react";
import { useRoutes, useParams, useNavigate } from "react-router-dom";
import AuthContext from "./context/authContext";
import routes from "./routes";
import "./styles/reset.css";
import "./styles/App.css";

const App = () => {

  const navigator = useNavigate()
  const router = useRoutes(routes);

  const baseUrl = "https://crms-h94h.onrender.com"



  return (
    <AuthContext.Provider
      value={{
        baseUrl
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}


export default App;