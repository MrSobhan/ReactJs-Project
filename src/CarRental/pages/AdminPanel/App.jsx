import React from "react";
import { useRoutes } from "react-router-dom";

import Sidebar from "../../Components/SidebarAdmin/Sidebar";
import Header from "../../Components/HeaderAdmin/Header";
import { Outlet } from "react-router-dom";
// import routes from "./routes";

import "./App.css";

export default function App() {
  // const router = useRoutes(routes)

  return (
    <>
      <Sidebar />

      <div className="main">
        <Header />

        <div className="container p-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}
