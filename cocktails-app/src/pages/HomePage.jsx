import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import Categories from "../components/Categories";

const HomePage = () => {
  const [drink, setDrink] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCocktail = async () => {
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
    } finally {
      setLoading(false);
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
    fetchCocktail();
  }, []);

  return (
    <main className="container mx-auto h-screen">
      {drink && (
        <RecipeCard
          drink={drink}
          onUpdate={fetchCocktail}
          isLoading={loading}
        />
      )}
      <Categories isHome={true}></Categories>
    </main>
  );
};

export default HomePage;
