import React from "react";
import { NavLink } from "react-router-dom";
import phoneMockup from "../images/mobile_mockup.jpg";
import downArrow from '../images/down-arrow.png';
import "../css/fourthSection.css";
import clip from "../video/crypto.mp4";

const FourthSection = () => {
  return (
    <>
      <div className="phoneMockupDiv">
        <div>
          <p>
          Are you looking to join the Blockchain Bandwagon?
          </p>
          <NavLink className="plansButton" to="/cloud-plans">See Plans</NavLink>
        </div>

          {/* <img src={clip} alt="coin_art" /> */}
          <video loop autoPlay className="videoTag">
          <source
            src={clip}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
      </div>
      <div className="arrow"><img src={downArrow} alt="downArrow" /></div>
    </>
    

  );
};

export default FourthSection;
