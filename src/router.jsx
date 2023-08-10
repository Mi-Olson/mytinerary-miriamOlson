import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import MainLayout from "./layout/MainLayout";

const router=createBrowserRouter([

    {path:'/',
    element:<MainLayout/>,
    children:[
        { path:'/',element:<Home/>},
        { path: "/index", element: <Home />},
        { path: "/home", element: <Home />},
        {  path: "/cities", element: <Cities />}

    ]}
])

 
export default router ;