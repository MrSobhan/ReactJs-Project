import Error404 from "./pages/404";
import Blog from "./pages/blog";
import Car from "./pages/car";
import CarPage from "./pages/carPage";
import Index from "./pages/index";
import Login from "./pages/login";
import Singup from "./pages/singup";


const routes = [
  { path: "/", element: <Index /> },
  { path: "/login", element: <Login /> },
  { path: "/singup", element: <Singup /> },
  { path: "/blog", element: <Blog /> },
  { path: "/car/:idCar", element: <CarPage /> },
  { path: "/carList", element: <Car /> },
  { path: "*", element: <Error404 /> },
  
];

export default routes;
