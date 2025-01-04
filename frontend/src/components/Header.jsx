import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Button from "./Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-20 bg-transparent">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex gap-x-7 text-white">
        <NavLink className="uppercase font-outfit hover:text-red-500 duration-300 ease-in-out">
          Classes
        </NavLink>
        <NavLink className="uppercase font-outfit hover:text-red-500 duration-300 ease-in-out">
          Team
        </NavLink>
        <NavLink className="uppercase font-outfit hover:text-red-500 duration-300 ease-in-out">
          About us
        </NavLink>
        <NavLink className="uppercase font-outfit hover:text-red-500 duration-300 ease-in-out">
          Gallery
        </NavLink>
      </div>
      <div>
        <Button variant="primary" className="font-outfit">
          Sign up
        </Button>
      </div>
    </header>
  );
}
