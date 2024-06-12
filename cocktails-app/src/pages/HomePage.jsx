import { useState } from "react";
import Hero from "../components/Hero";
import HeaderImages from "../components/HeaderImages";
import { FiSearch } from "react-icons/fi";
import RecipeCard from "../components/RecipeCard";
import Cocktails from "../components/Cocktails";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  console.log(`searchInput::: ${searchInput}`);

  function handleSearchInputChange(e) {
    setSearchInput(e.target.value);
  }

  return (
    <main className="container mx-auto h-screen">
      <Hero />

      <div className="relative">
        <HeaderImages />

        {/* Search Bar */}
        <div className="search-bar flex justify-center">
          <div className="absolute bottom-0.5 w-full md:w-5/6 xl:w-4/6 px-6 md:pl-3">
            <div className="flex shadow-md lg:shadow-lg focus:outline-none focus:ring-gray-400 focus:ring-1 ">
              <div className="w-full">
                <span className="absolute inset-y-0 left-5 text-gray-500 flex items-center pl-10">
                  <FiSearch size={18} />
                </span>
                <input
                  onChange={handleSearchInputChange}
                  className="placeholder:text-gray-500 block w-full border rounded-l-md py-3 md:py-5 pl-16 md:pl-20 pr-3 text-sm sm:text-lg"
                  type="text"
                  name="search"
                  placeholder="Enter a cocktail name..."
                />
              </div>
              <button
                disabled={searchInput === ""}
                onClick={() => navigate(`/cocktails/${searchInput}`)}
                className="disabled:bg-red-200 bg-[#ff0033] text-white font-bold lg:text-lg rounded-r-md px-4 md:px-10 cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <RecipeCard />
      <Cocktails />
    </main>
  );
};

export default HomePage;
