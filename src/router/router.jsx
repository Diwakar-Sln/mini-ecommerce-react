import { createBrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import Signup from "../pages/Signup";

const router = Router([
    {
        path: "*",
        element: <h1>404 not found</h1>
    },
    {
        path:"/",
        element: <AuthLayout/>, 
        children : [
            {
                index: true,
                element: <Login/>
            },
            {
                path:"signup",
                element: <Signup/>
            }
        ]
    },
    {
        path: "/home",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "cart",
                element: <Cart />
            }
        ]
    }
])

export default router