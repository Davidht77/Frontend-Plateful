import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage, {  } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import '../output.css';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/register",
      element: <RegisterPage/>,
    },
  ]);
  
  export default router;
  