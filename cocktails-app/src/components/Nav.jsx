import React from "react";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Cocktails",
      link: "/cocktails",
    },
    {
      title: "Login",
      link: "/login",
    },
  ];

  return (
    <nav className="fixed top-0 z-10 w-screen bg-white ">
      <div className="lg:container mx-auto">
        <div className="flex justify-between items-center lg:px-10 md:py-3">
          <NavLink
            to="/"
            className="logo md:text-2xl font-semibold font-serif cursor-pointer"
          >
            Cocktails with Code
          </NavLink>
          <FiMenu className="size-5 md:hidden" />

          <ul className="hidden md:flex md:text-lg lg:text-xl md:space-x-16">
            {navItems.map((nav, key) => (
              <li key={key}>
                <NavLink
                  to={nav.link}
                  className={({ isActive }) =>
                    "flex flex-col px-2 py-2 cursor-pointer " +
                    (isActive
                      ? "border-b-4 border-b-[#ff0033]"
                      : "hover:border-b-4 border-b-slate-300")
                  }
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

//  <NavLink to="/" className="p-5 hover:text-[#ff0033] cursor-pointer">
//    {({ isActive }) => (
//      <span
//        className={
//          isActive
//            ? "pb-2 border-b-2 border-b-[#ff0033]"
//            : "hover:border-b-2 border-b-gray-400"
//        }
//      >
//        Home
//      </span>
//    )}
//  </NavLink>;
