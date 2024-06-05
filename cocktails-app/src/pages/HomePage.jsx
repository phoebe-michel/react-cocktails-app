import React from "react";
import Hero from "../components/Hero";
import HeaderImages from "../components/HeaderImages";
import { FiSearch } from "react-icons/fi";
import RecipeCard from "../components/RecipeCard";
import Cocktails from "../components/Cocktails";

const HomePage = () => {
  return (
    <main className="container-xl h-screen">
      <Hero />

      <div className="relative w-full">
        <HeaderImages />

        {/* Search Bar */}
        <div className="search-bar flex justify-center">
          <div className="absolute bottom-0.5 w-full md:w-5/6 xl:w-4/6 px-6 md:pl-3">
            <span className="absolute inset-y-0 left-5 text-gray-500 flex items-center pl-10">
              <FiSearch size={18} />
            </span>
            <input
              className="placeholder:text-gray-500 block w-full border rounded-md py-3 md:py-5 pl-20 pr-3 shadow-md lg:shadow-lg focus:outline-none focus:ring-gray-400 focus:ring-1 text-sm sm:text-lg"
              type="text"
              name="search"
              placeholder="Enter a cocktail name..."
            />
          </div>
        </div>
      </div>

      <RecipeCard />
      <Cocktails />
    </main>
  );
};

export default HomePage;
