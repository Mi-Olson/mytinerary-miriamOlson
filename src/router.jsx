import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import MainLayout from "./layout/MainLayout";
import CityDetail from "./pages/CityDetail";
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import FormSingIn from "./pages/FormSignIn"
import NotFound from "./components/NotFound";


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
            { path: "/signin", element: <SignIn /> },
            { path: "/signup", element: <SignUp /> },
            { path: "/auth/signin", element: <FormSingIn /> },
            { path: "/*", element: <NotFound /> }

        ]
    }




])



export default router;