import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Components/Home/Home";
import Error from "../Components/Error/Error";
import DashBoard from "../Components/DashBoard/DashBoard";
import Marathon from "../Components/Marathon/Marathon";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/dashboard",
        Component: DashBoard
      },
      {
        path: "/marathon",
        Component: Marathon
      }
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);
