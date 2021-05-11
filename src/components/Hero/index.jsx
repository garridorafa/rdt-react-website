import React from "react";

import { Button } from "../Button";
import "../../App.css";
import "./styles.css";

function Hero() {
  return (
    <div className="hero-container">
      <video
        src="http://garridorafa.github.io/rdt-react-website/videos/hero-video.mp4"
        autoPlay
        loop
        muted
      />
      <h1>Discover Dominican Republic</h1>
      <p>Enjoy an unique experience!!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
