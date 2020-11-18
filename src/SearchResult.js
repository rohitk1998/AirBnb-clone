import React from "react";
import "./SearchResult.css";

function SearchResult({
  img,
  location,
  title,
  star,
  description,
  price,
  total,
}) {
  return (
    <div className="res__card">
      <div className="res__card__top">
        <img src={img} alt="" />
      </div>
      <div className="res__card__bottom">
        <h2>{title}</h2>
        <h3>{location}</h3>
        <p>{description}</p>
        <p>{star}</p>
        <h3>{price}</h3>
        <h3>{total}</h3>
      </div>
    </div>
  );
}

export default SearchResult;
