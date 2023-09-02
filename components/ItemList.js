import React from "react";
import { RES_IMAGE } from "./utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="">
      {items.map((item) => (
        <div key={item.card.info.id} className="item_list_sty">
          <div>
            <div>
              <span className="catch_span">
                {item.card.info.name} - ₹{" "}
                {Math.round(item.card.info.price / 100)
                  ? Math.round(item.card.info.price / 100)
                  : Math.round(item.card.info.defaultPrice / 100)}
              </span>
              <p className="itemlist_testAlign">{item.card.info.description}</p>
            </div>
          </div>
          <div className="itemlist_img">
            <button className="but_to_add">+Add</button>
            <img src={RES_IMAGE + item.card.info.imageId} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
