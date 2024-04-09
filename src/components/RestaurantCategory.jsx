import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className=" m-2 p-2 border-b-2 rounded-lg bg-slate-100 w-6/12 mx-auto">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className=" font-semibold text-lg  ">
            {data.title}({data.itemCards.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
