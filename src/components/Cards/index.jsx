import React from "react";

import CardItem from "../CardItem";
import CardInfo from "./CardsInfoEnum";
import "./styles.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {CardInfo.map((card) => (
              <CardItem
                key={card.id}
                src={card.src}
                text={card.text}
                label={card.label}
                path={card.path}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
