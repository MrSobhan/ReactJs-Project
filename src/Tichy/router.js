import Home from "./home/Home";
import Login from "./login/Login";
import Singin from "./login/SingIn";
import Cart from "./Cart/Cart";
import MainProduct from "./home/MainProduct/mainProduct";


const Router  = [
    {path:"/" , element: <Home />},
    {path:"/login" , element: <Login />},
    {path:"/singin" , element: <Singin />},
    {path:"/cart" , element: <Cart />},
    {path:"/product/:idProduct" , element: <MainProduct />},
    // {path:"*" , element: <Error />}
]


export default Router