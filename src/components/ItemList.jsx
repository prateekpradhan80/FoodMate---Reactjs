import React, { useContext } from "react";
import { CDN_URL } from "../Utils/Constant";
import { UserContext } from "../Utils/UserContext";

const ItemList = ({ items }) => {
  const data = useContext(UserContext);

  return (
    <div className="m-4">
      {items.map((items) => (
        <div className="flex " key={items.card.info.id}>
          <div
            key={items.card.info.id}
            className="border-b-4 border-slate-400 text-left  w-9/12 "
          >
            <div className="">
              <span className="text-lg">{items.card.info.name}</span>
              <span className=" ml-2 text-lg">
                ₹
                {items.card.info.price
                  ? items.card.info.price / 100
                  : items.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{items.card.info.description}</p>
          </div>
          <div className="w-3/12 my-3">
            <img
              className="max-h-32 w-full"
              src={CDN_URL + items.card.info.imageId}
            />
            <button className="bg-blue-500 text-white rounded-md px-3">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
