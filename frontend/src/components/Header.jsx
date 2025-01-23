import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Button from "./Button";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/user/userSlice";

export default function Header({ classes, membership, instructors }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();
  

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  function handleLogout() {
    dispatch(clearUser());
    navigate('/');
  }

  return (
    <header className="fixed z-30 w-full flex justify-between items-center py-7 px-5 lg:px-20 lg:backdrop-blur-sm bg-transparent">
      <a href="/">
        <img src={logo} alt="logo" className="w-24" />
      </a>

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
          onClick={() => scrollToSection(classes)}
          className="uppercase font-outfit hover:text-red-500 duration-300 ease-in-out text-white"
        >
          Classes
        </NavLink>
        <NavLink
          onClick={() => scrollToSection(membership)}
          className="uppercase font-outfit hover:text-red-500 duration-300 ease-in-out text-white"
        >
          Membership
        </NavLink>
        <NavLink
          onClick={() => scrollToSection(instructors)}
          className="uppercase font-outfit hover:text-red-500 duration-300 ease-in-out text-white"
        >
          Instructors
        </NavLink>
        <NavLink
          to="/nutrition"
          className="uppercase font-outfit hover:text-red-500 duration-300 ease-in-out text-white"
        >
          Nutrition
        </NavLink>
      </nav>

      <div className="hidden lg:block">
        {username ? (
          <div className="flex items-center gap-4">
            <div className="uppercase font-outfit text-2xl text-white">
              {username}
            </div>
            <Button
              className="bg-red-500 rounded-xl font-outfit text-white px-4 py-2 hover:bg-red-900 ease-in-out duration-300"
              onClick={handleLogout}
            >
              Sign out
            </Button>
          </div>
        ) : (
          <Button
            to="/signup"
            className="bg-red-500 rounded-xl font-outfit text-white px-4 py-2 hover:bg-red-900 ease-in-out duration-300"
          >
            Sign up
          </Button>
        )}
      </div>
    </header>
  );
}
