import React, { useEffect, useState } from "react";
import { useRoutes, useParams, useNavigate } from "react-router-dom";
import AuthContext from "./context/authContext";
import routes from "./routes";
import "./styles/reset.css";
import "./styles/App.css";

const App = () => {

  const navigator = useNavigate()
  const router = useRoutes(routes);

  const baseUrl = "https://divarapi.liara.run"



  return (
    <>
      {router}
    </>
  );
}


export default App;