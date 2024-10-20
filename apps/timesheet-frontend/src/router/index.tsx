import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/main/home-page";
import RegisterPage from "../pages/auth/register-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
