import { Outlet, createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Register from "./Pages/Register/Register";
import NotFound from "./Pages/ErrorPage/NotFound";
import Navbar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
 }

 function WithoutLayout() {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
 }

 const router = createBrowserRouter([
    {
      element: <WithoutLayout />,
      children: [
        {
          path: "/Register", 
          element: <Register />,
        },
        {
          path: "*", 
          element: <NotFound />,
        }
      ],
    },
    {
      element: <Layout />,
      children: [
        {
          path: "/", 
          element: <Home />,
        },
        {
          path: "/products", 
          element: <Home />,
        },
        {
          path: "/products/:productID", 
          element: <Product></Product>,
        },
        {
          path: "*", 
          element: <NotFound />,
        }
      ],
    },
  ]);
  
  export default router;
  