import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchtext, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
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
              <RestaurantCard
                key={restaurant?.info.id}
                reslist={restaurant?.info}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
