import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage, {  } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import '../output.css';
import { HomePage } from "../pages/HomePage";
import ViewRestaurants from "../pages/ViewRestaurants";
import MapComponent from "../pages/new";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" replace />, // Redirección inicial a login
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "restaurants",
    element: <ViewRestaurants/>,
  },
  ]);
  
  export default router;
  