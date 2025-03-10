import Blog from "./pages/blog";
import CarPage from "./pages/carPage";
import Index from "./pages/index";
import Login from "./pages/login";
import Singup from "./pages/singup";


const routes = [
  { path: "/", element: <Index /> },
  { path: "/login", element: <Login /> },
  { path: "/singup", element: <Singup /> },
  { path: "/blog", element: <Blog /> },
  { path: "/car", element: <CarPage /> },
  
];

export default routes;
