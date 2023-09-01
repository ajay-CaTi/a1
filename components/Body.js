import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { FOOD_API } from "./utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filterResturant, setFilterResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FOOD_API);
    const json = await data.json();

    const resData =
      json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants;

    console.log(resData);
    setListOfResturants(resData);
    setFilterResturant(resData);
  };

  const filterTopRes = () => {
    const list = listOfResturants.filter((data) => {
      return data.info.avgRating > 4.2;
    });
    console.log(list);
    setListOfResturants(list);
    setFilterResturant(list);
  };
  console.log(listOfResturants);

  if (onlineStatus === false) {
    return <h1>Looks you are offline</h1>;
  }

  if (listOfResturants.length == 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="search_container">
        <input
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          type="text"
          className="search_input"
        />
        <button
          onClick={() => {
            console.log(searchText);
            const filterResturant = listOfResturants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterResturant(filterResturant);
          }}
        >
          Search
        </button>
        <button onClick={filterTopRes}>Top rated Restaurants</button>
      </div>
      <div className="res_container">
        {filterResturant.map((val) => {
          return (
            <RestaurantCard
              key={val.info.id}
              name={val.info.name}
              id={val.info.id}
              avgRating={val.info.avgRating}
              cost={val.info.costForTwo}
              cuisines={val.info.cuisines}
              cloudinaryImageId={val.info.cloudinaryImageId}
              deliveryTime={val.info.sla.deliveryTime}
              restaurantId={val.info.feeDetails.restaurantId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
