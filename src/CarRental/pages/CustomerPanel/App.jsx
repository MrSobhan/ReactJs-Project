import React from "react";
import { useRoutes } from "react-router-dom";

import Sidebar from "../../Components/SidebarCustomer/Sidebar";
import Header from "../../Components/HeaderAdmin/Header";
import { Outlet } from "react-router-dom";
// import routes from "./routes";

import "../AdminPanel/App.css";

export default function CustomerPanel() {
  // const router = useRoutes(routes)

  return (
    <>
      <Sidebar />

      <div className="main">
        <Header />

        <div className="py-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}
