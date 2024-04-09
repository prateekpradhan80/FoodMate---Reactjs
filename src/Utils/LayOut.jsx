import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { UserContext } from "./UserContext";
const LayOut = () => {
  const [theme, setTheme] = useState("white");
  const toggleTheme = () => {
    setTheme(theme === "white" ? "slate" : "white");
  };

  return (
    <div>
      <UserContext.Provider value={{ theme, setTheme, toggleTheme }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default LayOut;
