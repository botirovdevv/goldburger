import Admin from "../pages/Admin";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import About from "../pages/About";
import News from "../pages/News";
import Vakansiya from "../pages/Vakansiya";

export const routes = [
    {
        path: "/",
        element: <Home/>
    },

    {
        path: "/login",
        element: <Login/>
    },

    {
        path: "/admin",
        element: <Admin/>
    },

    {
        path: "*",
        element: <NotFound/>
    },

    {
        path: "/about",
        element: <About/>
    },

    {
        path: "/news",
        element: <News/>
    },

    {
        path: "/vakansiya",
        element: <Vakansiya/>,
    }
        
    
]