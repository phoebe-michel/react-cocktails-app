import { useState, useEffect } from "react";
import axios from "axios";

const RecipeCard = () => {
  const [drink, setDrink] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      setDrink(res.data.drinks[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const numOfIngredients = Object.keys(drink).length;

  const ingredients = [];

  for (let i = 1; i <= numOfIngredients; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    if (drink[ingredientKey] && drink[measureKey]) {
      const obj = {
        ingredient: drink[ingredientKey],
        measure: drink[measureKey],
      };

      ingredients.push(obj);
    }
  }

  return (
    <section className="container mx-auto py-8 xl:py-16 md:w-5/6 w-full">
      <section className="recipe place-self-center max-h-screen">
        <div className="grid auto-rows-min lg:grid-cols-2 px-8 space-y-4 md:space-y-9 lg:space-y-0 lg:py-16 lg:gap-x-10">
          <img
            className="row-start-2 lg:row-start-1 lg:row-span-5"
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
          />
          <div className="heading row-start-1 lg:col-start-2 lg:block space-y-1 pb-7 lg:pb-1 lg:pt-10">
            {" "}
            <h4 className="text-lg md:text-2xl highlight font-bold">
              Featured Cocktail
            </h4>
            <h1 className="text-4xl md:text-6xl lg:text-5xl font-semibold font-serif">
              {drink.strDrink}
            </h1>
            <h3 className="text-lg md:text-2xl text-zinc-400 font-light">
              {drink.strCategory}
            </h3>
          </div>
          <div className="row-start-3 md:py-5 lg:row-span-2 lg:col-start-2 lg:overflow-y-scroll lg:max-h-[300px]">
            <div className="ingredients lg:text-lg">
              <h3 className="font-medium text-2xl xl:text-3xl text-zinc-800 pb-3">
                Ingredients
              </h3>
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.measure} {ingredient.ingredient}
                </li>
              ))}
            </div>
            <div className="instructions py-5 lg:text-lg">
              <h3 className="font-medium text-2xl xl:text-3xl text-zinc-800 pb-3">
                Instructions
              </h3>
              {drink.strInstructions}
            </div>
          </div>
          <div className="row-start-5 lg:col-start-2 lg:pb-10">
            <button
              onClick={fetchData}
              className="bg-[#ff0033] text-white shadow-md rounded-lg text-lg px-5 py-2 cursor-pointer"
            >
              Shuffle Recipe
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default RecipeCard;
