import AddMovie from "./addMovie/AddMovie";
import Details from "./Details/Details";
import Home from "./home/Home";
import NotFound from "./notFound/notFound";


const Router  = [
    {path:"/" , element: <Home />},
    {path:"/mymovie" , element: <AddMovie />},
    {path:"/details/:idMovie" , element: <Details />},
    {path:"*" , element: <NotFound />},
    // {path:"*" , element: <Error />}
]


export default Router