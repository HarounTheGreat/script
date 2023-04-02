import Comments from "../comments/Comments";
import "./recherche.css";
import React, { useState } from "react";

const Recherche = ({ trump }) => {
  return (
    <div className="recherche">
      <h1>-------------- Search Bar Here --------------</h1>
      <Comments trump={trump} />
    </div>
  );
};

export default Recherche;
