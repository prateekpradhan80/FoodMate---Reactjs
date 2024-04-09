import React, { useState } from "react";
import RestaurantMenu from "./RestaurantMenu";
import { CDN_URL } from "../Utils/Constant";
const RestaurantCard = (props) => {
  const { reslist } = props;
  /*const { cloudinaryImageId, areaName
    , avgRating, cuisines, costForTwo } = resData;*/

  return (
    <div>
      <div className=" bg-gray-200 w-[18vw] h-[50vh]  m-8 p-3 hover:bg-blue-200  cursor-pointer  rounded-lg shadow-xl">
        <img
          className="w-full h-[30vh]  mb-2   transition-transform duration-300 hover:scale-105 rounded-lg"
          src={CDN_URL + reslist?.cloudinaryImageId}
        />
        <h3 className="font-semibold"> {reslist?.name} </h3>
        <span> {reslist?.avgRating} ⭐ || </span>
        <span> {reslist.sla.slaString} </span>
        <h2 className="truncate  text-sm text-gray-500">
          {" "}
          {reslist?.cuisines.join(",")}
        </h2>

        <div className="flex justify-between mt-1">
          <h3>{reslist?.costForTwo}</h3>
          <h2 className="text-gray-500 ">📍{reslist?.locality}</h2>
        </div>
      </div>
    </div>
  );
};

//higher order component
//input - RestaurantCard ==> RestaurantCardVeg

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-slate-700 text-white px-4 rounded-md m-1">Veg</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
