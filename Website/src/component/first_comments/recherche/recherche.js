import Comments from "../comments/Comments";
import "./recherche.css";
import React, { useState } from "react";

const Recherche = ({ data }) => {
  return (
    <div className="recherche">
      <h1>-------------- Search Bar Here --------------</h1>
      <Comments data={data} />
    </div>
  );
};

export default Recherche;
