import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/main/home-page";
import LoginPage from "../pages/auth/login-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
