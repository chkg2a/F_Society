import React from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Notification from "./Notification";

const NavBar = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  const handleLogOut = async () => {
    await fetch("http://localhost:8000/api/auth/logout");
  };

  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/crowdfunding">Crowdfunding</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img
              src="/logo.png"
              alt="logo"
              className="h-10 w-auto"
            />
            <p>AnimalRescue</p>
          </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/crowdfunding">Crowdfunding</Link>
          </li>
          <li>
            <Link to="/joinorg">Join Organization</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {currentUser
          ? (
            <>
              <Notification />
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Profile Avatar"
                      src={currentUser.avatar}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings">Settings</Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </>
          )
          : <LoginComp />}
      </div>
    </div>
  );
};

const ConnectComp = () => {
  return (
    <div className="px-5 btn-ghost">
      Login
    </div>
  );
};

const LoginComp = () => {
  return (
    <div className="px-5">
      <Link to="/sign-in" className="justify-between btn btn-primary">
        Login
      </Link>
    </div>
  );
};

export default NavBar;
