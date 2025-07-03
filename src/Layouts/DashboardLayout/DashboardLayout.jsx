import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { NavLink, Outlet } from "react-router";
import MakeBlurText from "../../Components/MakeBlurText/MakeBlurText";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto ">
        <main className="w-11/12 md:container mx-auto md:h-[calc(100vh-150px)] md:grid md:grid-cols-8 md:gap-4 min-h-screen">
          <aside className=" md:col-span-2 flex justify-center bg-primary text-white">
            <div className="flex items-center justify-center">
              <div className="flex md:flex-col flex-row my-1 items-center justify-between space-x-3 md:space-y-2 md:pl-2">
                <div className=" text-center text-xs md:text-lg">
                  <NavLink to={"/dashboard/addmarathon"} className="dash-menu">
                    <MakeBlurText text={"Add marathon"}></MakeBlurText>
                  </NavLink>
                </div>
                <div className=" text-center text-xs md:text-lg">
                  <NavLink
                    to={"/dashboard/mymarathonlist"}
                    className="dash-menu"
                  >
                    <MakeBlurText text={"My marathon list"}></MakeBlurText>
                  </NavLink>
                </div>
                <div className=" text-center text-xs md:text-lg">
                  <NavLink to={"/dashboard/myapplylist"} className="dash-menu">
                    <MakeBlurText text={"My apply list"}></MakeBlurText>
                  </NavLink>
                </div>
              </div>
            </div>
          </aside>
          <div className="md:col-span-6 md:h-full md:overflow-y-auto ">
            <Outlet></Outlet>
          </div>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
