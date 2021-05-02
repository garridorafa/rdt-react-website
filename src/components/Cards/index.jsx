import React from "react";

import "./styles.css";
import CardItem from "../CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-1.jpg"
              text="Fly over punta cana coast with a parachute and reach heights of up to 50 meters!"
              label="Aventure"
              path="/services"
            />
            <CardItem
              src="/images/img-2.jpg"
              text="Rest, read or sleep in the refreshing hammocks under the sun or the shadows of coconut trees"
              label="Relaxing"
              path="/services"
            />
            <CardItem
              src="/images/img-3.jpg"
              text="Take private tour on boat all-include"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="/images/img-4.jpg"
              text="Share in the group activities that they will develop on the sand"
              label="Party"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
