import React from "react";
import "./Card.css";

function Card({ title, src, description, price }) {
  return (
    <div className="card">
      <div className="card__top">
        <img src={src} alt="" />
      </div>
      <div className="card__bottom">
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
