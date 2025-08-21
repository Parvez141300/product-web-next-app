
import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import ThemeToggle from "./shared/ThemeToggle";

const NavBar = () => {
  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 w-10/12 mx-auto">
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
            {links}
          </ul>
        </div>
        <Link href={'/'} className="btn btn-ghost text-xl px-0">EasyPro</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {/* theme toggle */}
        <ThemeToggle></ThemeToggle>
        {/* authentication links */}
        <Link href={"/login"}>
          <Button className={"btn-primary btn-outline rounded-lg"}>
            Login
          </Button>
        </Link>
        <Link href={"/register"}>
          <Button className={"btn-primary rounded-lg"}>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
