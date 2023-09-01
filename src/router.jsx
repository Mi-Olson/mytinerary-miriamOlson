import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import MainLayout from "./layout/MainLayout";
import CityDetail from "./pages/CityDetail";
// import SignUp from "./pages/SignUp"
// import SignIn from "./pages/SignIn"
import FormSignIn from "./pages/FormSignIn"
import FormSignUp from "./pages/FormSignUp"
import NotFound from "./components/NotFound";
import NavLayout from "./layout/NavLayout";
import Itineraries from "./pages/Itineraries";
const router = createBrowserRouter([
   
   

    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: "/index", element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/cities", element: <Cities /> },
            { path: "/cityDetail/:id", element: <CityDetail /> },
          
            // { path: "/signup", element: <SignUp /> },

            { path: "/*", element: <NotFound /> }

        ]
    }, 
   
    {
        path: "/itineraries", element: <Itineraries />
    },
    {
        path: "/",
        element: <NavLayout />,
        children: [
            { path: "/", element:<FormSignIn/>},
            // { path: "/index", element:<FormSignIn/>},
            { path: "/auth/signin", element: <FormSignIn /> },
         
        { path: "/auth/signup", element: <FormSignUp /> }
    ]
    },






])



export default router;