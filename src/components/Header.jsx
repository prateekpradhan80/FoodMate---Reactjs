import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [auth, setAuth] = useState("LogIn");
  function authBtn() {
    if (auth === "LogIn") {
      setAuth("LogOut");
    } else {
      setAuth("LogIn");
    }
  }
  return (
    <div className="flex justify-between mt-1 mx-1 border-solid border-2 p-4 shadow-md  ">
      <div className="  ml-10">
        <img
          className="w-16"
          src="https://play-lh.googleusercontent.com/hfShVgV4G6q4yYVC6EdDwIXEIbS6pCxLq4OL8j6GWGFbpjgr_ys6e_POuMtAYclIdP0"
        />
      </div>
      <div className=" mr-10  ">
        <ul className=" flex text-2xl ">
          <li className="mr-8 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-teal-600" : "text-black"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mr-8 ">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-teal-600" : "text-black"}`
              }
              to="/about"
            >
              AboutUs
            </NavLink>
          </li>
          <li className="mr-8 ">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-teal-700" : "text-black"}`
              }
              to="/contact"
            >
              ContactUs
            </NavLink>
          </li>
          <li className="mr-20 ">Cart</li>
          <button
            className="  bg-blue-400 p-2 mx-2 rounded-full "
            onClick={authBtn}
          >
            {" "}
            {auth}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
