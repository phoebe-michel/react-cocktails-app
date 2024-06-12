import React from "react";
import { useLoaderData } from "react-router-dom";
import DrinkCard from "../components/DrinkCard";

const SearchResultsPage = () => {
  const results = useLoaderData();

  const cocktails = results.cocktails ? results.cocktails : null;
  const cocktailResultCards = cocktails.map((cocktail) => {
    return (
      <DrinkCard className="cursor-pointer" cocktail={cocktail}></DrinkCard>
    );
  });

  return (
    <div className="py-32 px-16 h-screen grid grid-cols-4 gap-8">
      {cocktailResultCards}
    </div>
  );
};

const searchResultsLoader = async ({ params }) => {
  try {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.cocktailName}`;
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
