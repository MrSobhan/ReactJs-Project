import React from "react";
import Router from './router'
import { useRoutes } from "react-router-dom";
import AuthContext from "./context/authContext";
import "./main.css";

export default function App() {
  let router = useRoutes(Router)
  const baseUrl = "http://localhost:8080"
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