import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    // Logic imp
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="res_cat_sty">
        {/* Header  */}
        <div className="res_cat_sty_inside" onClick={handleClick}>
          <span className="res_cat_inside_span">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⏬</span>
        </div>

        {/* Accordin body  */}

        <div className="">
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
