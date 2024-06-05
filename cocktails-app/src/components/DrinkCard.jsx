import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";

const DrinkCard = ({ cocktail }) => {
  return (
    <div className="border-2 bg-white h-auto cursor-pointer">
      <div className="card-thumbnail">
        {" "}
        <img
          src={cocktail.strDrinkThumb}
          alt=""
          srcset={`Thumbnail for ${cocktail.strDrink}`}
        />
      </div>
      <div className=" w-full card-content font-medium p-5 flex items-center justify-between">
        <div className="heading">
          <h2 className="card-title text-lg font-serif">{cocktail.strDrink}</h2>
        </div>
        <div className="bookmark">
          <BsBookmarkHeart className="size-6" />
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
