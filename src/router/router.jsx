import { createBrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import MainLayout from "../layout/MainLayout";

const router = Router([
    {
        path: "*",
        element: <h1>404 not found</h1>
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
])

export default router