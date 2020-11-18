import React from "react";
import "./Place.css";

function Place({ src, location, tocover }) {
  return (
    <div className="place__card">
      <div className="card__left">
        <img src={src} alt="" />
      </div>
      <div className="card__right">
        <h4>{location}</h4>
        <h5>{tocover}</h5>
      </div>
    </div>
  );
}

export default Place;
