import React from "react";
import { RES_IMAGE } from "./utils/constants";
import { Link } from "react-router-dom";

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
    <Link className="link_style" to={`/res/${id}`} key={id}>
      <div className="res_card">
        <img src={RES_IMAGE + cloudinaryImageId} alt={restaurantId} />
        <h3>
          {name} - {cost}
        </h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} ratings</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
