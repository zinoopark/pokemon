import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-place">
      <div className="card">
        <div className="card-back">
          <img
            src="https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg"
            loading="lazy"
          ></img>
        </div>
        <div className="card-front">
          <img src="https://images.pokemontcg.io/swsh8/250_hires.png"></img>
        </div>
        <div className="card__shine"></div>
      </div>
    </div>
  );
};

export default Card;
