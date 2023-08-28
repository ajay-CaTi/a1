import React from "react";
import { RES_IMAGE } from "./utils/constants";

const RestaurantCard = ({
  id,
  name,
  avgRating,
  cost,
  cloudinaryImageId,
  cuisines,
  deliveryTime,
  restaurantId,
}) => {
  return (
    <div className="res_card">
      <img src={RES_IMAGE + cloudinaryImageId} alt={restaurantId} />
      <h3>
        {name} - {cost}
      </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ratings</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
