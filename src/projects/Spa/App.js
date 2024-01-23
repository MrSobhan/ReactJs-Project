import React from "react";
import Header from "./components/header";
import Router from './components/router'
import { useRoutes } from "react-router-dom";
import "./main.css";

export default function App() {
  let router = useRoutes(Router)
  return (
    <>
      <Header />
      {router}
    </>
  );
}
