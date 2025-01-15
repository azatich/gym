import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Button from "./Button";
import Menu from "./Menu";
import HamburgerMenu from "../assets/HamburgerMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-5 lg:px-20 bg-transparent">
      <div>
        <img src={logo} alt="logo" className="w-24" />
      </div>

      <button
        className="text-white text-3xl lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu openNavigation={isOpen} />
      </button>

      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row gap-5 lg:gap-x-7 absolute lg:static top-16 left-0 right-0 bg-black lg:bg-transparent lg:w-auto w-full p-5 lg:p-0`}
      >
        <NavLink
          to="/classes"
          className="uppercase font-outfit hover:text-red-500 duration-300 ease-in-out text-white"
        >
          Classes
        </NavLink>
        <NavLink
          to="/membership"
          className="uppercase font-outfit hover:text-red-500 duration-300 ease-in-out text-white"
        >
          Membership
        </NavLink>
        <NavLink
          to="/about"
          className="uppercase font-outfit hover:text-red-500 duration-300 ease-in-out text-white"
        >
          About us
        </NavLink>
        <NavLink
          to="/gallery"
          className="uppercase font-outfit hover:text-red-500 duration-300 ease-in-out text-white"
        >
          Gallery
        </NavLink>
      </nav>

      {/* Sign Up Button */}
      <div className="hidden lg:block">
        <Button variant="primary" className="font-outfit">
          Sign up
        </Button>
      </div>
    </header>
  );
}
