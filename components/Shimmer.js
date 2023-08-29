import React from "react";

const Shimmer = () => {
  return (
    <div className="body">
      <div className="search_container">
        <input type="text" className="search_input" />
        <button>Search</button>
        <button>Top rated Restaurants</button>
      </div>

      <div className="shimmer_container">
        <div className="shimmer_card"></div>
        <div className="shimmer_card"></div>
        <div className="shimmer_card"></div>
        <div className="shimmer_card"></div>
      </div>
    </div>
  );
};

export default Shimmer;
