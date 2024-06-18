import React from "react";
import { useState, useEffect } from "react";
import DrinkCard from "./DrinkCard";
import { useNavigate } from "react-router-dom";

const Cocktails = ({ isHome = false }) => {
  const [categories, setCategories] = useState([]);
  const [cocktails, setCocktails] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Ordinary Drink");
  const navigate = useNavigate();

  const fetchCategories = async () => {
    const apiUrl =
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const categories = data.drinks.map((category) => category.strCategory);
        setCategories(categories);
      })
      .catch(console.error);
  };

  const fetchDrinksbyCategory = async (category) => {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
    try {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setCocktails(data.drinks));
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (category) => {
    setSelectedCategory(category);
    fetchDrinksbyCategory(category);
  };

  useEffect(() => {
    fetchCategories();
    fetchDrinksbyCategory(selectedCategory);
  }, []);

  return (
    <section className="cocktails-section container mx-auto min-h-[100lvh] h-auto flex items-center py-10 md:py-0 lg:px-10">
      <div>
        <div className="categories-section container">
          <div className="space-y-4 px-5">
            <h2 className="text-4xl md:text-5xl text-center font-bold text-slate-700">
              Drinks by Category
            </h2>
            <div className="flex justify-center items-center pt-5">
              <ul className="categories font-medium text-lg lg:text-xl flex flex-wrap px-8 rounded-full text-slate-700 border-2 border-slate-300 shadow-md">
                {categories.map((category, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => handleClick(category)}
                      className={
                        "cursor-pointer w-auto px-8 py-3 hover:text-white  " +
                        (selectedCategory === category
                          ? "bg-[#ff0033] text-white hover:bg-[#ff0033]"
                          : "hover:bg-[#ff0033]/[0.5]")
                      }
                    >
                      {category}
                      {/* <div className="border-2 w-6"></div> */}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="cocktails px-10 xl:px-0 lg:py-12 grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 mx-auto">
          {isHome
            ? cocktails.slice(0, 5).map((drink, index) => {
                return <DrinkCard key={index} cocktail={drink}></DrinkCard>;
              })
            : cocktails.map((drink, index) => {
                return <DrinkCard key={index} cocktail={drink}></DrinkCard>;
              })}
        </div>
        <div className="flex justify-center">
          {isHome ? (
            <button
              onClick={() => navigate("/filterbycategory")}
              className="bg-[#ff0033] text-white shadow-md rounded-lg text-lg w-48 px-5 py-2 cursor-pointer"
            >
              View More
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
