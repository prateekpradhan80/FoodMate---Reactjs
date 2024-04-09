import React from "react";
import { useRouteError } from "react-router-dom";
import error from "../assets/error.jpg";
const Error = () => {
  const err = useRouteError();
   
  return (
    <div className=" flex  justify-center flex-col">
      <img className="w-[50vw] h-[70vh]" src={error} />
      <h1 className="text-2xl ml-16 bg-red-400 w-fit px-3">
        {err.data} -
        {"     "} {err.status} {err.statusText}
      </h1>
    </div>
  );
};

export default Error;
