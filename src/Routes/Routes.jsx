import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Components/Home/Home";
import Error from "../Components/Error/Error";
import DashBoard from "../Components/DashBoard/DashBoard";
import Marathon from "../Components/Marathon/Marathon";
import AddMarathon from "../Components/AddMarathon/AddMarathon";
import MyMarathonList from "../Components/MyMarathonList/MyMarathonList";
import MyApplyList from "../Components/MyApplyList/MyApplyList";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
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
        Component: DashBoard,
      },
      {
        path: "/marathon",
        Component: Marathon,
      },
      {
        path: "/addmarathon",
        Component: AddMarathon,
      },
      {
        path: "/mymarathonlist",
        Component: MyMarathonList,
      },
      {
        path: "/myapplylist",
        Component: MyApplyList,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);
