import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import HeaderImages from "../components/HeaderImages";
import { FiSearch } from "react-icons/fi";
import RecipeCard from "../components/RecipeCard";
import Cocktails from "../components/Cocktails";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInputChange(e) {
    setSearchInput(e.target.value);
  }

  const [drink, setDrink] = useState(null);

  const fetchData = async () => {
    try {
      const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
      const res = await fetch(apiUrl);
      const data = await res.json();
      const drinkData = data.drinks[0];

      const { idDrink, strDrinkThumb, strDrink, strCategory, strInstructions } =
        drinkData;

      const strIngredients = getIngredients(drinkData);

      const drinkObj = {
        idDrink,
        strDrinkThumb,
        strDrink,
        strCategory,
        strIngredients,
        strInstructions,
      };
      setDrink(drinkObj);
    } catch (err) {
      console.error("Error fetching cocktail:", err);
    }
  };

  const getIngredients = (drinkRecipe) => {
    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      if (drinkRecipe[ingredientKey]) {
        ingredients.push({
          ingredient: drinkRecipe[ingredientKey],
          measure: drinkRecipe[measureKey] || "",
        });
      }
    }

    return ingredients;
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                onClick={() =>
                  navigate(`/cocktails/searchbyname/${searchInput}`)
                }
                className="disabled:bg-red-200 disabled:cursor-not-allowed bg-[#ff0033] text-white font-bold lg:text-lg rounded-r-md px-4 md:px-10 cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {drink && <RecipeCard drink={drink} onUpdate={fetchData} />}
      <Cocktails />
    </main>
  );
};

export default HomePage;
