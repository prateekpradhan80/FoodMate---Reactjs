import React, { useContext, useState } from "react";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { UserContext } from "../Utils/UserContext";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resInfo = useRestaurantMenu(resId);

  const { theme } = useContext(UserContext);
  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, avgRating, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className={` text-center bg-${theme}-500`}>
        <div className=" ">
          <h1 className=" text-2xl font-semibold mb-3 "> {name} </h1>
          <div className=" ">
            <span className="text-lg bg-green-600 text-white px-1 rounded-md">
              {avgRating}☆
            </span>
            <span className="text-lg font-semibold ml-3">
              {costForTwoMessage}
            </span>
            <h2>{cuisines.join(",")}</h2>
          </div>

          <div>
            {categories.map((category, index) => (
              <RestaurantCategory
                key={index}
                data={category?.card?.card}
                showItems={index === showIndex}
                setShowIndex={() =>
                  setShowIndex(index === showIndex ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
