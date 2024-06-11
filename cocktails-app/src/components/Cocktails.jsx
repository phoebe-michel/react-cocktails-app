import React from "react";
import { useState, useEffect } from "react";
import DrinkCard from "./DrinkCard";
import axios from "axios";

const Cocktails = () => {
  const [categories, setCategories] = useState([]);
  const [cocktails, setCocktails] = useState([]);
  const fetchCategories = async () => {
    const data = [
      {
        strCategory: "Ordinary Drinks",
        strThumbnail:
          "https://www.thecocktaildb.com/images/media/drink/f9erqb1504350557.jpg",
      },
      {
        strCategory: "Cocktails",
        strThumbnail:
          "https://www.thecocktaildb.com/images/media/drink/rptuxy1472669372.jpg",
      },
      {
        strCategory: "Shots",
        strThumbnail:
          "https://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg",
      },
      {
        strCategory: "Beers",
        strThumbnail:
          "https://www.thecocktaildb.com/images/media/drink/xuwpyu1441248734.jpg",
      },
      {
        strCategory: "Homemade Liqueurs",
        strThumbnail:
          "https://www.thecocktaildb.com/images/media/drink/qwxuwy1472667570.jpg",
      },
    ];
    const categoriesArr = data.map((category, index) => {
      return (
        <li key={index} className="px-3 pb-0">
          {category.strCategory}
          <div className="border-2 w-6"></div>
        </li>
      );
    });
    setCategories(categoriesArr);
  };

  const fetchDrinksbyCategory = async () => {
    const apiUrl =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=cocktail";
    try {
      const res = await axios(apiUrl);
      setCocktails(res.data.drinks);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCategories();
    fetchDrinksbyCategory();
  }, []);

  return (
    <section className="cocktails-section container mx-auto min-h-[100lvh] h-auto flex items-center py-10 md:py-0 lg:px-10">
      <div>
        <div className="categories-section container">
          <div className="space-y-4 px-5">
            <h2 className="text-4xl md:text-5xl text-center font-bold">
              Drinks by Category
            </h2>
            <ul className="categories font-medium text-lg lg:text-xl flex justify-center flex-wrap lg:space-x-10  pb-5 text-slate-500">
              {categories}
            </ul>
          </div>
        </div>

        <div className="cocktails px-10 xl:px-0 lg:py-12 grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mx-auto">
          {cocktails.slice(0, 4).map((drink) => {
            return <DrinkCard cocktail={drink}></DrinkCard>;
          })}
        </div>
        <div className="flex justify-center">
          <button className="bg-[#ff0033] text-white shadow-md rounded-full text-lg w-48 px-5 py-2 cursor-pointer">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
