import Home from "./home";
import CoursesPage from "./courses";
import MainCoursePage from "./mainCourse";
import AboutPage from "./about";
import Login from "./login";
import Error from "./error";
import Panel from "./Panel";
import Privet from "./privetRouter";

const Router  = [
    {path:"/" , element: <Home />},
    {path:"/courses" , element: <CoursesPage />},
    {path:"/login" , element: <Login />},
    {path:"/Panel" , element: <Privet><Panel /></Privet>},
    {path:"/course/:id" , element: <MainCoursePage />},
    {path:"/about" , element: <AboutPage />},
    {path:"*" , element: <Error />}
]


export default Router