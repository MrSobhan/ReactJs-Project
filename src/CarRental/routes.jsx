import Error404 from "./pages/404";
import Blog from "./pages/blog";
import Car from "./pages/car";
import CarPage from "./pages/carPage";
import Index from "./pages/index";
import Login from "./pages/login";
import Singup from "./pages/singup";

// ? Admin Panel

import PAdminPrivate from "./Components/Private/PAdminPrivate";
import AdminPanel from "./pages/AdminPanel/App";

import Customers from "./ComponentsPanel/Customers/Customers";
import Vehicles from "./ComponentsPanel/Vehicles/Vehicles";
import VehicleInsurances from "./ComponentsPanel/VehicleInsurances/VehicleInsurances";
import Invoices from "./ComponentsPanel/Invoices/Invoices";
import Rentals from "./ComponentsPanel/Rentals/Rentals";
import Comments from "./ComponentsPanel/Comments/Comments";
import Payments from "./ComponentsPanel/Payments/Payments";
import Posts from "./ComponentsPanel/Posts/Posts";
import Admins from "./ComponentsPanel/Admins/Admins";


const routes = [
  { path: "/", element: <Index /> },
  { path: "/login", element: <Login /> },
  { path: "/singup", element: <Singup /> },
  { path: "/blog/:postId", element: <Blog /> },
  { path: "/car/:carId", element: <CarPage /> },
  { path: "/carList", element: <Car /> },
  { path: "*", element: <Error404 /> },

  {
    path: "/p-admin/*",
    element: (
      <PAdminPrivate>
        <AdminPanel />
      </PAdminPrivate>
    ),
    children: [
      { path: "", element: <Vehicles /> },
      { path: "admins", element: <Admins /> },
      { path: "customers", element: <Customers /> },
      { path: "vehicles", element: <Vehicles /> },
      { path: "vehicleInsurances", element: <VehicleInsurances /> },
      { path: "invoices", element: <Invoices /> },
      { path: "rentals", element: <Rentals /> },
      { path: "payments", element: <Payments /> },
      { path: "posts", element: <Posts /> },
      { path: "comments", element: <Comments /> },
    ],
  },

];

export default routes;
