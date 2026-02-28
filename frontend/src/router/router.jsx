import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Home/Home";
import SignUp from "../page/SignUp/SignUp";
import Login from "../page/Login/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/signUp",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "*",
        element: <h1>Router not found</h1>
      }
    ]
  },
]);