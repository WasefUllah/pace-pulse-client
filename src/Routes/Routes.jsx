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
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import MakeBlurText from "../Components/MakeBlurText.jsx/MakeBlurText";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      // {
      //   path: "/dashboard",
      //   Component: DashBoard,
      // },
      {
        path: "/marathon",
        Component: Marathon,
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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <div className="flex items-center justify-center text-primary font-bold text-2xl md:text-5xl lg:text-7xl mt-4 md:mt-20 lg:mt-40">
            <MakeBlurText text={"welcome to dashboard"}></MakeBlurText>
          </div>
        ),
      },
      {
        path: "/dashboard/addmarathon",
        element: (
          <PrivateRoute>
            <AddMarathon></AddMarathon>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/mymarathonlist",
        element: (
          <PrivateRoute>
            <MyMarathonList></MyMarathonList>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myapplylist",
        element: (
          <PrivateRoute>
            <MyApplyList></MyApplyList>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);
