import AddMovie from "./addMovie/AddMovie";
import Details from "./Details/Details";
import Home from "./home/Home";


const Router  = [
    {path:"/" , element: <Home />},
    {path:"/mymovie" , element: <AddMovie />},
    {path:"/details/:idMovie" , element: <Details />},
    // {path:"*" , element: <Error />}
]


export default Router