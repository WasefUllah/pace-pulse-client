import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogoutBtn = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        Swal.fire({
          title: "Logged out!",
          icon: "success",
          draggable: true,
        });
      })
      .catch(() => {
        // An error happened.
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-20">
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
              className="py-1 px-2 hover:bg-gray-700 rounded-2xl nav-menu"
            >
              Home
            </NavLink>
            {user && (
              <NavLink
                to={"/dashboard"}
                className="py-1 px-2 hover:bg-gray-700 rounded-2xl nav-menu"
              >
                Dashboard
              </NavLink>
            )}
            <NavLink
              to={"/marathon"}
              className="py-1 px-2 hover:bg-gray-700 rounded-2xl nav-menu"
            >
              Marathon
            </NavLink>
            <NavLink
              to={"/aboutUs"}
              className="py-1 px-2 hover:bg-gray-700 rounded-2xl nav-menu"
            >
              About Us
            </NavLink>
            <NavLink
              to={"/contactUs"}
              className="py-1 px-2 hover:bg-gray-700 rounded-2xl nav-menu"
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
        <img
          src={"https://i.ibb.co/wNqn7smp/logo.jpg"}
          alt=""
          className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2 ">
          <NavLink
            to={"/"}
            className="py-1 px-2 hover:bg-gray-700 rounded-2xl nav-menu font-semibold lg:text-lg"
          >
            Home
          </NavLink>
          {user && (
            <NavLink
              to={"/dashboard"}
              className="py-1 px-2 hover:bg-gray-700 rounded-2xl nav-menu font-semibold lg:text-lg"
            >
              Dashboard
            </NavLink>
          )}
          <NavLink
            to={"/marathon"}
            className="py-1 px-2 hover:bg-gray-700 rounded-2xl nav-menu font-semibold lg:text-lg"
          >
            Marathon
          </NavLink>
          <NavLink
            to={"/aboutUs"}
            className="py-1 px-2 hover:bg-gray-700 rounded-2xl nav-menu font-semibold lg:text-lg"
          >
            About Us
          </NavLink>
          <NavLink
            to={"/contactUs"}
            className="py-1 px-2 hover:bg-gray-700 rounded-2xl nav-menu font-semibold lg:text-lg"
          >
            Contact Us
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end space-x-2 md:space-x-3 lg:space-x-4">
        {user && (
          <img
            src={user?.photoURL}
            alt=""
            className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full"
          />
        )}
        {user ? (
          <Link>
            <button
              onClick={handleLogoutBtn}
              className="btn btn-primary btn-xs md:btn-lg"
            >
              Logout
            </button>
          </Link>
        ) : (
          <div className="space-x-2 md:space-x-3 lg:space-x-4">
            <Link to={"/register"}>
              <button className="btn btn-primary btn-xs md:btn-lg">
                Register
              </button>
            </Link>

            <Link to={"/login"}>
              <button className="btn btn-primary btn-xs md:btn-lg">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
