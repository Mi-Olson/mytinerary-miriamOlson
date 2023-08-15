import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import MainLayout from "./layout/MainLayout";
import CityHome from "./components/CitYHome";

const router=createBrowserRouter([

    {path:'/',
    element:<MainLayout/>,
    children:[
        { path:'/',element:<Home/>},
        { path: "/index", element: <Home />},
        { path: "/home", element: <Home />},
        {  path: "/cities", element: <Cities />,
        children:[
            { path:'/cities',element:<Cities/>},
            { path: "/cities/CityHome", element: <CityHome/>}
           
        ]
    
    
    
    }

    ]}
])


 
export default router ;