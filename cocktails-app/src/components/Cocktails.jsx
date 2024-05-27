import React from "react";
import { FiSearch } from "react-icons/fi";
import HeaderImages from "./HeaderImages";

const Cocktails = () => {
  return (
    <section className=" cocktails container flex flex-col justify-center mx-auto">
      <div className="relative w-full">
        <HeaderImages />
        {/* <input
          className="absolute bottom-0.5 w-4/6 rounded-lg shadow-xl px-10 py-5 text-lg"
          placeholder="Enter a cocktail name..."
        /> */}

        <div className="search-bar flex justify-center">
          <div className="absolute bottom-0.5 w-4/6 pl-3">
            <span className="absolute inset-y-0 left-5 text-gray-500 flex items-center pl-10">
              <FiSearch size={18} />
            </span>
            <input
              className="placeholder:text-gray-500 block w-full border rounded-md py-5 pl-20 pr-3 shadow-xl focus:outline-none  focus:ring-gray-400 focus:ring-1 sm:text-lg"
              type="text"
              name="search"
              placeholder="Enter a cocktail name..."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
