import React from "react";

const Nav = () => {
  return (
    <nav className="fixed top-0 z-10 w-screen bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center text-lg">
          <div className="logo py-5 text-2xl font-semibold cursor-pointer">
            C&C
          </div>
          <ul className="flex">
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
