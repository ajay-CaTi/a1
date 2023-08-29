import React, { useState } from "react";
import IMG_LOGO from "./images/food.png";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const handleClick = () => {
    login == "Login" ? setLogin("Logout") : setLogin("Login");
  };
  return (
    <div className="header">
      <div className="logo_container">
        <img src={IMG_LOGO} alt="food_logo" />
      </div>
      <div className="nav_items">
        <ul className="">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li className="btnWidth">
            <button onClick={handleClick}>{login}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
