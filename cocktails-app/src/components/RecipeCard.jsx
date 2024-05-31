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
    <section className="container mx-auto px-44 gap-24 py-28 w-full grid grid-cols-2 justify-center">
      <img className="" src={drink.strDrinkThumb} alt={drink.strDrink} />
      <section className="recipe place-self-center max-h-screen">
        <div>
          <h4 className="text-lg highlight font-bold">Featured Cocktail</h4>
          <h1 className="text-5xl font-semibold font-serif">
            {drink.strDrink}
          </h1>
          <h3 className="text-lg text-zinc-400 font-light">
            {drink.strCategory}
          </h3>
          <div className="overflow-y-scroll max-h-[300px] py-5">
            <div className="ingredients py-5">
              <h3 className="font-medium text-2xl text-zinc-800 pb-3">
                Ingredients
              </h3>
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.measure} {ingredient.ingredient}
                </li>
              ))}
            </div>
            <div className="instructions py-5">
              <h3 className="font-medium text-2xl text-zinc-800 pb-3">
                Instructions
              </h3>
              {drink.strInstructions}
            </div>
          </div>
          <div className="py-10">
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
