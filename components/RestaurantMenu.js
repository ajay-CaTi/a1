import Shimmer from "./Shimmer";
import { RES_IMAGE } from "./utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  // const [showIndex, setShowIndex] = useState(0); // useState(null) // to close all initially
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo.length === 0) {
    return <Shimmer />;
  }

  const { itemCards } =
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  // console.log(itemCards);

  // console.log(
  //   "first",
  //   resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
  // );
  // type.googleapis.com/swiggy.presentation.food.v2.ItemCategory
  const categories =
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  const { name, avgRating, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo.data.cards[0].card.card.info;
  // console.log(resInfo.data.cards[0].card.card.info);

  return (
    <div>
      <div className="res_menu">
        <h1>{name}</h1>
        <h2>AvgRatings :- {avgRating}</h2>
        <h2>{costForTwoMessage}</h2>
        <h2>{cuisines.join(", ")}</h2>
        <img
          style={{ width: "200px" }}
          src={RES_IMAGE + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div>
        {/* <ul>
          {itemCards.map((res) => {
            return (
              <li key={res.card.info.id}>
                {res.card.info.name} - Price:-{" "}
                {Math.round(res.card.info.price / 100)
                  ? Math.round(res.card.info.price / 100)
                  : Math.round(res.card.info.defaultPrice / 100)}
              </li>
            );
          })}
        </ul> */}
        {categories.map((category, index) => (
          <RestaurantCategory
            key={index}
            data={category?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
