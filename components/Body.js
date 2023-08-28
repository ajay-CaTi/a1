import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { FOOD_API } from "./utils/constants";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FOOD_API);
    const json = await data.json();

    const resData =
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;

    console.log(resData);
    setListOfResturants(resData);
  };

  const filterTopRes = () => {
    const list = listOfResturants.filter((data) => {
      return data.info.avgRating > 4.2;
    });
    console.log(list);
    setListOfResturants(list);
  };
  return (
    <div className="body">
      <div className="search_container">
        <input type="text" className="search_input" />
        <button>Search</button>
        <button onClick={filterTopRes}>Top rated Restaurants</button>
      </div>
      <div className="res_container">
        {listOfResturants.map((val) => {
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
