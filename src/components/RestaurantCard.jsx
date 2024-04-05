import React, { useState } from "react";
const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const RestaurantCard = (props) => {
  const { reslist } = props;
  /*const { cloudinaryImageId, areaName
    , avgRating, cuisines, costForTwo } = resData;*/

  return (
    <div >
      <div className=" bg-gray-200 w-[18vw] h-[50vh]  m-8 p-3 hover:bg-blue-200  cursor-pointer  rounded-lg shadow-xl"  >
        <img
          className="w-full h-[30vh]"
          src={CDN_URL + reslist?.cloudinaryImageId}
        />
        <h3 className="font-semibold"> {reslist?.name} </h3>
        <span> {reslist?.avgRating} ⭐ || </span>
        <span> {reslist.sla.slaString} </span>
        <h2 className="overflow-hidden text-sm text-gray-500">
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

export default RestaurantCard;
