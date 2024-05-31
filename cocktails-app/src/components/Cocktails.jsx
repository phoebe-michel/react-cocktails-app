import React from "react";
import { useState, useEffect } from "react";
import DrinkCard from "./DrinkCard";

const Cocktails = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl =
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        const categoriesArr = data.drinks.map((cat) => {
          return <li>{cat.strCategory}</li>;
        });
        setCategories(categoriesArr);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="cocktails-section container mx-auto">
      {/* <div className="categories-section container flex justify-center">
        <div className="">
          <h2 className="text-5xl">Categories</h2>
          <div className="categories"></div>
        </div>
      </div> */}

      <div className="cocktails py-10 grid grid-cols-4 gap-5 max-w-[1280px] mx-auto">
        <DrinkCard />
        <DrinkCard />
        <DrinkCard />
        <DrinkCard />
        <DrinkCard />
        <DrinkCard />
        <DrinkCard />
        <DrinkCard />
      </div>
    </section>
  );
};

export default Cocktails;
