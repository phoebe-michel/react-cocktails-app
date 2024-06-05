import React from "react";

const HeaderImages = () => {
  return (
    <div className="cocktail-images h-auto ">
      <div className="container mx-auto pb-6 lg:px-16">
        <div className="cocktail-cards grid grid-cols-3 md:grid-cols-4">
          <img
            className="hover:shadow-zinc-800 cursor-pointer"
            src="https://www.thecocktaildb.com/images/media/drink/709s6m1613655124.jpg"
            alt="Americano"
          />{" "}
          <img
            className="hover:shadow-zinc-800 cursor-pointer"
            src="https://www.thecocktaildb.com/images/media/drink/1wifuv1485619797.jpg"
            alt="Zima Blaster | 17027"
          />
          <img
            className="hover:shadow-zinc-800 cursor-pointer"
            src="https://www.thecocktaildb.com/images/media/drink/stwiva1619704025.jpg"
            alt="Mountain Bramble | 17835"
          />{" "}
          <img
            className="hidden md:block hover:shadow-zinc-800 cursor-pointer"
            src="https://www.thecocktaildb.com/images/media/drink/qxvypq1468924331.jpg"
            alt="Spiced Peach Punch | 13032"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderImages;
