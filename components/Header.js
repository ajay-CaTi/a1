import React, { useEffect, useState, useContext } from "react";
import IMG_LOGO from "./images/food.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "./utils/UserContext";

const Header = () => {
  const [login, setLogin] = useState("Login");
  // const data = useContext(UserContext);
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  // console.log("login");
  useEffect(() => {
    // console.log("useEffect calls");
  });

  const handleClick = () => {
    login == "Login" ? setLogin("Logout") : setLogin("Login");
  };

  return (
    <div className="header">
      <div className="logo_container">
        <Link to={"/"}>
          <img className="" src={IMG_LOGO} alt="food_logo" />
        </Link>
      </div>
      <div className="nav_items">
        <ul className="font-bold">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            <Link to={"/"}>Cart</Link>
          </li>
          <li>
            <Link to={"/"}>
              {onlineStatus === true ? "Online 🟢" : "Offline 🔴"}
            </Link>
          </li>
          <li className="btnWidth">
            <button onClick={handleClick}>{login}</button>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
