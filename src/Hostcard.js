import React from "react";
import "./Hostcard.css";

function Hostcard({ src, title }) {
  return (
    <div className="host__card">
      <img src={src} alt="" />
      <h2>{title}</h2>
    </div>
  );
}

export default Hostcard;
