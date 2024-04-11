import React from "react";
import { CDN_URL } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action

    dispatch(addItem(item));
  };
  return (
    <div className="m-4 ">
      {items.map((item) => (
        <div className="flex " key={item.card.info.id}>
          <div
            key={item.card.info.id}
            className="border-b-4 border-slate-400 text-left  w-9/12 "
          >
            <div className="">
              <span className="text-lg">{item.card.info.name}</span>
              <span className=" ml-2 text-lg">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 my-3">
            <img
              className="max-h-32 w-full"
              src={CDN_URL + item.card.info.imageId}
            />
            <button
              onClick={() => handleAddItem(item)}
              className="bg-blue-500 text-white rounded-md px-3"
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
