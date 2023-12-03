import React from "react";
import "./Work.css";
import Upwork from "../../img/Upwork.png"
import Facebook from "../../img/Facebook.png"
import Fiver from "../../img/fiverr.png"
import Shopify from "../../img/Shopify.png"
import Amazon from "../../img/amazon.png"

const Work = () => {
  return (
    <div className="works">
      <div className="amazing">
        <span>Works For All These</span>
        <span>Brands & CLients</span>
        <span>
          I'm doing a lot of frontends project for E-Commer website <br />
          and Create a amazing design for website.
          <br/>
          Create a amazing design for website.<br/>
          Create a amazing design for website. Doing a grate<br/>
          work.
        </span>

        <button className="button s-button">Hire Me</button>
      </div>
      <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      {/* {Left Side} */}
      <div className="w-right">
       <div className="w-mainCircle">
        <div className="w-secCircle">
            <img src={Upwork} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Fiver} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Amazon} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Shopify} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Facebook} alt="" />
        </div>
       </div>
        {/* Background circle */}
        <div className="w-backCircle blueCircle">

        </div>
        <div className="w-backCircle yellowCircle">
            
            </div>

      </div>
    </div>
  );
};

export default Work;
