import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header = () => {
  const [auth, setAuth] = useState("LogIn");
  function authBtn() {
    if (auth === "LogIn") {
      setAuth("LogOut");
    } else {
      setAuth("LogIn");
    }
  }
 const onlineStatus=useOnlineStatus();
  return (
    <div className="flex justify-between mt-1 border-solid border-2 p-1 shadow-md  ">
      <div className="   ml-8">
        <Link to="/">
          <img className=" w-[15vw]" src={logo} />
        </Link>
      </div>
      <div className=" mr-10  ">
        <ul className=" flex text-2xl pt-2">
          <li className="mr-8 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-blue-600" : "text-black"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mr-8 ">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-blue-600" : "text-black"}`
              }
              to="/about"
            >
              AboutUs
            </NavLink>
          </li>
          <li className="mr-8 ">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-blue-600" : "text-black"}`
              }
              to="/contact"
            >
              ContactUs
            </NavLink>
          </li>
          <li className="mr-10 ">Cart</li>
          <li className="  text-sm">Activity status {onlineStatus ?"✅":"❌"}</li>
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
