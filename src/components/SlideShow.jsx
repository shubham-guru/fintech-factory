import React, { useState, useEffect } from "react";
import "../css/Slideshow.css";
// import bgVideo from '../video/bgVideo.mp4';
import { NavLink } from "react-router-dom";
import graphicCard from '../images/graphicCard.png';
import graphicCard2 from '../images/graphicCard2.png';
import downArrow from '../images/down-arrow.png';


const SlideShow = () => {
  useEffect(()=>{
    window.scroll(0,0)
  }, [])
  const [src, setSrc] = useState(graphicCard);
  return (
    <>
    <div className="headDiv">
      <div>
        <h1>Your Trusted Partner for<br/> Everything Blockchain !</h1>
        <p>Yes, we are working for future</p>
        <NavLink to="/" className="button">Start your mining journey</NavLink>
      </div>
      <div>
        <img src={src} id="graphic_card" 
          onMouseEnter={()=>setSrc(graphicCard2)}
          onMouseLeave={()=>setSrc(graphicCard)}  
          alt="graphic_card" />
      </div>
    </div>
    <div className="arrow"><img src={downArrow} alt="downArrow" /></div>
    </>
  );
};
export default SlideShow;
