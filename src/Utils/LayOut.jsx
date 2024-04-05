import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const LayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayOut;
