import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const RecipeCard = ({ drink, onUpdate, isLoading }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <section className="container min-h-[100lvh] h-auto m-auto flex items-center py-8 xl:py-16 md:w-5/6 w-full">
      <section className="recipe place-self-center  container-xl m-auto">
        {!onUpdate && (
          <div className="md:p-8">
            <button
              onClick={handleBackClick}
              className="flex items-center space-x-2 bg-[#ff0033] text-white font-bold lg:text-lg rounded-md py-2 px-4 mx md:px-8 cursor-pointer"
            >
              <FaArrowLeft /> <span>Back</span>
            </button>
          </div>
        )}
        {isLoading ? (
          <Spinner loading={isLoading} />
        ) : (
          <div className="grid auto-rows-min lg:grid-cols-2 px-8 space-y-4 md:space-y-9 lg:space-y-5 lg:gap-x-14">
            <img
              className="row-start-2 lg:row-start-1 lg:row-span-5"
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
            />
            <div className="heading row-start-1 lg:col-start-2 lg:block space-y-1">
              {" "}
              {onUpdate && (
                <h4 className="text-lg md:text-2xl highlight font-bold">
                  Featured Cocktail
                </h4>
              )}
              <h1 className="text-4xl md:text-6xl lg:text-5xl font-semibold font-serif">
                {drink.strDrink}
              </h1>
              <h3 className="text-lg md:text-2xl text-zinc-400 font-light">
                {drink.strCategory}
              </h3>
            </div>
            <div className="row-start-3 md:py-5 lg:row-span-2 lg:col-start-2 lg:overflow-y-scroll ">
              <div className="ingredients lg:text-lg">
                <h3 className="font-medium text-2xl xl:text-3xl text-zinc-800 pb-3">
                  Ingredients
                </h3>
                {drink.strIngredients.map((ingredient, index) => (
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
            <div className="row-start-5 lg:col-start-2">
              {onUpdate && (
                <button
                  onClick={onUpdate}
                  className="bg-[#ff0033] text-white shadow-md rounded-lg text-lg px-5 py-2 cursor-pointer"
                >
                  Shuffle Recipe
                </button>
              )}
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default RecipeCard;
