import React from "react";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";

const DrinkCard = () => {
  return (
    <div className="border-2 bg-white h-auto cursor-pointer max-w-[320px]">
      <div className="card-thumbnail">
        {" "}
        <img
          src="https://www.thecocktaildb.com/images/media/drink/xrqxuv1454513218.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div className="card-content p-5 space-y-4 flex items-center justify-between">
        <div className="heading">
          {" "}
          <h3 className="card-subtitle text-sm text-zinc-400 font-light">
            Punch / Party Drink
          </h3>
          <h2 className="card-title text-lg font-semibold font-serif">
            Apple Cider Punch
          </h2>
        </div>
        <div className="bookmark">
          <BsBookmarkHeart className="size-5 justify-self-end" />
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
