
import CardHome from "./components/CardHome"
import NavBar from "./components/NavBar"
import Header from "./layout/Header"
import Home from "./pages/Home"
import {RouterProvider} from 'react-router-dom'
import router from './router'
{
  /* The following line can be included in your src/index.js or App.js file */
}
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './index.css'

function App() {


  return (
    <>
    <RouterProvider  router={router}/>


    </>
  )
}

export default App
