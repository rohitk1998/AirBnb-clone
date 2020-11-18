import { Button } from "@material-ui/core";
import React from "react";
import "./Banner.css";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  return (
    <div className="banner">
      <div className="banner__info">
        <h1>Go Near</h1>
        <p>Roam out and Strech Imagination</p>
        <Button variant="outline" onClick={() => history.push("/search")}>
          Explore NearBy
        </Button>
      </div>
    </div>
  );
}

export default Banner;
