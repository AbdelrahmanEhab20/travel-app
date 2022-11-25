import "./HeroSection.css";
import "../../App.css";
import React from "react";
import Button from "./../helper/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="../../../public/videos/video-2.mp4"
        loop
        muted
        autoPlay
      ></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
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
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />{" "}
          <FontAwesomeIcon icon={faPlay} className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
