import React from "react";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className="fixed top-0 z-10 w-screen bg-white ">
      <div className="lg:container mx-auto">
        <div className="flex justify-between items-center p-6 md: px-8 lg:px-10 md:py-3 lg:py-8">
          <div className="logo md:text-2xl font-semibold font-serif cursor-pointer">
            Cocktails with Code
          </div>
          <FiMenu className="size-5 md:hidden" />

          <ul className="hidden md:flex md:text-lg lg:text-xl">
            <li className="p-5 hover:border-b-[#ff0033] cursor-pointer">
              Home
            </li>
            <li className="p-5 hover:text-[#ff0033] cursor-pointer">
              Cocktails
            </li>
            <li className="p-5 hover:text-[#ff0033] cursor-pointer">
              My Recipes
            </li>
            <li className="p-5 hover:text-[#ff0033] cursor-pointer">Login</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
