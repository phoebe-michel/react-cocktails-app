import { React, useRef, useState, useEffect } from "react";
import DrinkCard from "./DrinkCard";
import { useNavigate, Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Spinner from "./Spinner";

const Cocktails = ({ isHome = false }) => {
  const [categories, setCategories] = useState([]);
  const [cocktails, setCocktails] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Ordinary Drink");
  const categoriesRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCategories = async () => {
    const apiUrl =
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const categories = data.drinks.map((category) => category.strCategory);
        setCategories(categories);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  const fetchDrinksbyCategory = async (category) => {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
    try {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setCocktails(data.drinks));
    } catch (err) {
      console.log(err);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchDrinksbyCategory(category);
  };

  useEffect(() => {
    fetchCategories();
    fetchDrinksbyCategory(selectedCategory);

    const handleScroll = () => {
      setScrollPosition(categoriesRef.current.scrollLeft);
    };

    const updateMaxScroll = () => {
      setMaxScroll(
        categoriesRef.current.scrollWidth - categoriesRef.current.clientWidth
      );
    };

    const ulElement = categoriesRef.current;
    ulElement.addEventListener("scroll", handleScroll);
    updateMaxScroll();

    // Update max scroll on window resize
    window.addEventListener("resize", updateMaxScroll);

    return () => {
      ulElement.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMaxScroll);
    };
  }, []);

  const scrollLeft = () => {
    categoriesRef.current.scrollBy({ left: -225, behavior: "smooth" });
  };

  const scrollRight = () => {
    categoriesRef.current.scrollBy({ left: 225, behavior: "smooth" });
  };

  return (
    <section className="cocktails-section container m-auto min-h-[100lvh] h-auto flex justify-center items-center py-10 md:py-0 lg:px-10">
      <div>
        <div className="categories-section container m-auto">
          <div className="space-y-4 px-5">
            <h2 className="text-4xl md:text-5xl text-center font-bold text-slate-700">
              Drinks by Category
            </h2>
            <div className="flex justify-center items-center py-8 lg:px-32 w-auto max-w-[380px] sm:max-w-full">
              <div className="flex m-auto px-5 max-w-full justify-center">
                <button
                  onClick={scrollLeft}
                  disabled={scrollPosition === 0}
                  className="rounded-l-full border-l-2 px-4 sm:px-6 shadow-md bg-[#ff0033] text-white disabled:bg-gray-100 disabled:text-gray-300"
                >
                  <FaAngleLeft size={20} />
                </button>
                <ul
                  ref={categoriesRef}
                  className="categories font-medium text-lg lg:text-xl flex flex-nowrap overflow-hidden text-slate-700 border-2 border-slate-300 shadow-md"
                >
                  {categories.map((category, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => handleCategoryClick(category)}
                        className={
                          "cursor-pointer border-x-2 border-gray-200 py-3 sm:py-5 px-5 text-nowrap hover:text-white lg:min-w-[225px] w-auto flex items-center justify-center " +
                          (selectedCategory === category
                            ? "bg-[#ff0033] text-white hover:bg-[#ff0033]"
                            : "hover:bg-[#ff0033]/[0.5]")
                        }
                      >
                        {category}
                        {/* <div className="border-2 w-6"></div> */}
                      </li>
                    );
                  })}
                </ul>
                <button
                  className="rounded-r-full border-r-2 px-4 sm:px-6 shadow-md bg-[#ff0033] text-white disabled:bg-gray-100 disabled:text-gray-300"
                  onClick={scrollRight}
                >
                  <FaAngleRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="container cocktails">
            <div className="px-10 xl:px-0 lg:py-12 grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mx-auto">
              {isHome
                ? cocktails.slice(0, 5).map((drink, index) => {
                    return (
                      <li key={index} className="list-none">
                        <Link to={`/cocktails/${drink.idDrink}`}>
                          <DrinkCard cocktail={drink}></DrinkCard>
                        </Link>
                      </li>
                    );
                  })
                : cocktails.map((drink, index) => {
                    return (
                      <li key={index} className="list-none">
                        <Link to={`/cocktails/${drink.idDrink}`}>
                          <DrinkCard cocktail={drink}></DrinkCard>
                        </Link>
                      </li>
                    );
                  })}
            </div>
            <div className="flex justify-center">
              {isHome ? (
                <button
                  onClick={() => navigate("/filterbycategory")}
                  className="bg-[#ff0033] text-white shadow-md rounded-lg text-lg w-48 px-5 py-2 cursor-pointer"
                >
                  View More
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cocktails;
