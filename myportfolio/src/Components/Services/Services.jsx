import React from "react";
import "./Services.css";
import Card from "../Cards/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resuma from '../../../src/TahaBilalResuma.pdf'
const Services = () => {
  return (
    <div className="services">
      {/* Left side code  */}

      <div className="amazing">
        <span>My Amazing</span>
        <span>Service</span>
        <span>
          I'm doing a lot of frontends project for E-Commer website <br />
          and Create a amazing design for website.
        </span>
        <a href={Resuma} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>
      <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      {/* Right side code  */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma , Sketch , Adobe , Adobe XD"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html| Css |JavaScript |React"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI / UX"}
            detail={"Creating a UI and UX design"}
          />
        </div>
        <div className="blur s-blur2" style={{background:'var(--purple)'}}>

        </div>

      </div>
     
    </div>
  );
};

export default Services;
