import Error404 from "./pages/404";
import Blog from "./pages/blog";
import Car from "./pages/car";
import CarPage from "./pages/carPage";
import Index from "./pages/index";
import Login from "./pages/login";
import Singup from "./pages/singup";

// ? Admin Panel

// import PAdminPrivate from "./Components/Private/PAdminPrivate";
// import AdminPanel from "./pages/AdminPanel/App";
// import Products from "./Components/Products/Products";
// import Comments from "./Components/Comments/Comments";
// import Users from "./Components/Users/Users";
// import Orders from "./Components/Orders/Orders";
// import Offs from "./Components/Offs/Offs";


const routes = [
  { path: "/", element: <Index /> },
  { path: "/login", element: <Login /> },
  { path: "/singup", element: <Singup /> },
  { path: "/blog", element: <Blog /> },
  { path: "/car/:idCar", element: <CarPage /> },
  { path: "/carList", element: <Car /> },
  { path: "*", element: <Error404 /> },

  // {
  //   path: "/p-admin/*",
  //   element: (
  //     <PAdminPrivate>
  //       <AdminPanel />
  //     </PAdminPrivate>
  //   ),
  //   children: [
  //     { path: "", element: <Products /> },
  //     { path: "/products", element: <Products /> },
  //     { path: "/comments", element: <Comments /> },
  //     { path: "/users", element: <Users /> },
  //     { path: "/orders", element: <Orders /> },
  //     { path: "/offs", element: <Offs /> },
  //   ],
  // },

];

export default routes;
