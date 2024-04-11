import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { UserContext } from "../Utils/UserContext";
import { MdDarkMode } from "react-icons/md";
import { TiAdjustBrightness } from "react-icons/ti";
import { useSelector } from "react-redux";
const Header = () => {
  const [auth, setAuth] = useState("LogIn");
  const { toggleTheme, theme } = useContext(UserContext);

  function authBtn() {
    if (auth === "LogIn") {
      setAuth("LogOut");
    } else {
      setAuth("LogIn");
    }
  }
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
console.log(cartItems);
  return (
    <div
      className={`flex justify-between mt-1 border-solid border-2 p-1 shadow-md bg-${theme}-500`}
    >
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
                `${isActive ? "text-blue-800" : "text-black"} font-semibold `
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mr-8 ">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-blue-800" : "text-black"} font-semibold`
              }
              to="/about"
            >
              AboutUs
            </NavLink>
          </li>
          <li className="mr-8 ">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-blue-800" : "text-black"} font-semibold`
              }
              to="/contact"
            >
              ContactUs
            </NavLink>
          </li>
          <li className="mr-10 "> <Link to="/cart">Cart - {cartItems.length}</Link> </li>
          <div>
            <li className="  text-sm">
              Activity status {onlineStatus ? "✅" : "❌"}
            </li>
            {theme == "white" ? (
              <button className="text-3xl" onClick={toggleTheme}>
                <MdDarkMode />{" "}
              </button>
            ) : (
              <button className="text-3xl" onClick={toggleTheme}>
                <TiAdjustBrightness />{" "}
              </button>
            )}
          </div>

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
