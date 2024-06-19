import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

const RecipePage = () => {
  const data = useLoaderData();
  const drinkData = data.recipe.drinks[0];
  const { idDrink, strDrinkThumb, strDrink, strCategory, strInstructions } =
    drinkData;
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

  const strIngredients = getIngredients(drinkData);

  const recipe = {
    idDrink,
    strDrinkThumb,
    strDrink,
    strCategory,
    strIngredients,
    strInstructions,
  };

  return (
    <div>
      <RecipeCard drink={recipe}></RecipeCard>
    </div>
  );
};

const recipeLoader = async ({ params }) => {
  try {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`;
    const res = await fetch(apiUrl);
    const recipe = await res.json();
    return { recipe };
  } catch (error) {
    console.error("Error fetching data", error);
  } finally {
    // setLoading(false);
  }
};

export { RecipePage as default, recipeLoader };
