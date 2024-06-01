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
        <li key={index} className="p-3 pb-0">
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
    <section className="cocktails-section container mx-auto">
      <div className="categories-section container max-w-[1280px] mx-auto">
        <div className="space-y-10">
          <h2 className="text-5xl text-center font-bold">Categories</h2>
          <ul className="categories font-medium text-2xl flex space-x-4">
            {categories}
          </ul>
        </div>
      </div>

      <div className="cocktails py-10 grid grid-cols-4 gap-9 max-w-[1280px] mx-auto">
        {cocktails.slice(0, 8).map((drink) => {
          return <DrinkCard cocktail={drink}></DrinkCard>;
        })}
      </div>
    </section>
  );
};

export default Cocktails;
