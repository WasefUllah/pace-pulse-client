import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to={"/"}
              className="py-1 px-2 hover:bg-gray-700 rounded-2xl"
            >
              Home
            </NavLink>
            <NavLink
              to={"/dashboard"}
              className="py-1 px-2 hover:bg-gray-700 rounded-2xl"
            >
              Dashboard
            </NavLink>
            <NavLink
              to={"/marathon"}
              className="py-1 px-2 hover:bg-gray-700 rounded-2xl"
            >
              Marathon
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2 ">
          <NavLink to={"/"} className="py-1 px-2 hover:bg-gray-700 rounded-2xl font-semibold lg:text-lg">
            Home
          </NavLink>
          <NavLink
            to={"/dashboard"}
            className="py-1 px-2 hover:bg-gray-700 rounded-2xl font-semibold lg:text-lg"
          >
            Dashboard
          </NavLink>
          <NavLink
            to={"/marathon"}
            className="py-1 px-2 hover:bg-gray-700 rounded-2xl font-semibold lg:text-lg"
          >
            Marathon
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end space-x-2 md:space-x-3 lg:space-x-4">
        <img
          src={"https://i.ibb.co/LXBVyNrh/Screenshot-2025-04-22-150139.png"}
          alt=""
          className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full"
        />
        <button className="btn btn-primary btn-xs md:btn-lg">Register</button>
        <button className="btn btn-primary btn-xs md:btn-lg">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
