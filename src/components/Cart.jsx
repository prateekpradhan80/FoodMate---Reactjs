import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { UserContext } from "../Utils/UserContext";
import { useContext } from "react";
const Cart = () => {
  const { theme } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className={`bg-${theme}-500`}>
      <div className="text-center   p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 text-center m-auto shadow-lg shadow-green-300">
          <ItemList items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
