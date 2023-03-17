import React from "react";
import "./Cards.css";

const Cards = ({ children }) => {
  return <section className="card-grid">{children}</section>;
};

export default Cards;
