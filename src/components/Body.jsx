import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import jump from "../assets/jump.jpg";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchtext, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  console.log(listOfRestaurant);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const RestaurantCardPrometed = withPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div className="m-12">
        <h1 className="text-2xl animate-bounce">
          Look like you are offline ,, please check your internet
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        <input
          placeholder="search foods.... "
          className="bg-gray-200 w-[15vw] ml-3 mt-4 px-3"
          value={searchtext}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-blue-400 px-2 rounded-r-full"
          onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchtext.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div>
        {listOfRestaurant.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="flex flex-wrap justify-evenly">
            {filteredRestaurant.map((restaurant) => (
              <Link
                key={restaurant?.info.id}
                to={"/restaurant/" + restaurant?.info.id}
              >
                {
                  /*  if the restaurant is veg then add a veg label top of it */
                  restaurant.info.veg ? (
                    <RestaurantCardPrometed reslist={restaurant?.info} />
                  ) : (
                    <RestaurantCard reslist={restaurant?.info} />
                  )
                }
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
