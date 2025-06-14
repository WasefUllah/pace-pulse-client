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
import PrivateRoute from "../PrivateRoute/Privateroute";
import Loader from "../Components/Loader/Loader";
import ShowMarathonDetails from "../Components/ShowMarathonDetails/ShowMarathonDetails";
import RegisterMarathon from "../Components/RegisterMarathon/RegisterMarathon";
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
        element: (
          <PrivateRoute>
            <AddMarathon></AddMarathon>
          </PrivateRoute>
        ),
      },
      {
        path: "/mymarathonlist",
        element: (
          <PrivateRoute>
            <MyMarathonList></MyMarathonList>
          </PrivateRoute>
        ),
      },
      {
        path: "/myapplylist",
        element: (
          <PrivateRoute>
            <MyApplyList></MyApplyList>
          </PrivateRoute>
        ),
      },
      {
        path: "/update"
      },
      {
        path: "/marathons/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/marathons/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <ShowMarathonDetails></ShowMarathonDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/registermarathon",
        element: (
          <PrivateRoute>
            <RegisterMarathon></RegisterMarathon>
          </PrivateRoute>
        ),
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
