import { useEffect, useState } from "react";
import { MENU_CARD } from "./utils/constants";

// hooks are nothing they are normla utility function
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_CARD + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
