import React from "react";
import { useLoaderData, useNavigate, Link } from "react-router-dom";
import { FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";
import DrinkCard from "../components/DrinkCard";

const SearchResultsPage = () => {
  const navigate = useNavigate();
  const result = useLoaderData();

  const cocktails = result.cocktails;
  const searchResults = cocktails ? (
    <>
      <button
        onClick={() => navigate(`/`)}
        className="flex items-center space-x-2 bg-[#ff0033] text-white font-bold lg:text-lg rounded-md py-2 px-4 mx md:px-8 cursor-pointer"
      >
        <FaArrowLeft /> <span>Back</span>
      </button>
      <div className="grid grid-cols-5 gap-8">
        {" "}
        {cocktails.map((cocktail) => {
          return (
            <li className="list-none" key={cocktail.idDrink}>
              <Link to={`/cocktails/${cocktail.idDrink}`}>
                <DrinkCard
                  className="cursor-pointer"
                  cocktail={cocktail}
                ></DrinkCard>
              </Link>
            </li>
          );
        })}
      </div>
    </>
  ) : (
    <div className="text-center flex flex-col justify-center items-center h-96">
      <i className="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"></i>
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <p className="text-xl mb-5">No Results were Found</p>
      <button
        onClick={() => navigate(`/`)}
        className="flex items-center space-x-2 bg-[#ff0033] text-white font-bold lg:text-lg rounded-md py-2 px-4 mx md:px-8 cursor-pointer"
      >
        <FaArrowLeft /> <span>Back</span>
      </button>
    </div>
  );

  return <div className="py-32 px-16 h-screen space-y-10">{searchResults}</div>;
};

const searchResultsLoader = async ({ params }) => {
  try {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.cocktail_name}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    const cocktails = data.drinks;
    return { cocktails };
  } catch (error) {
    console.error("Error fetching data", error);
  } finally {
    // setLoading(false);
  }
};

export { SearchResultsPage as default, searchResultsLoader };
