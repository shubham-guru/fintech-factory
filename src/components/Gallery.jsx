import React, { useEffect } from "react";
import "../css/gallery.css";

const Gallery = () => {
  useEffect(()=>{
    window.scroll(0,0)
  }, [])
  return (
    <div className="galleryDiv">
      <div className="svgDiv">
        <p>GALLERY </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="svg"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,128L60,149.3C120,171,240,213,360,234.7C480,256,600,256,720,240C840,224,960,192,
          1080,170.7C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,
          1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <hr className="divider" />
      <div className="grid-wrapper">
        <div>
          <img
            src="https://images.pexels.com/photos/11047223/pexels-photo-11047223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="pic"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/7596072/pexels-photo-7596072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="pic"
          />
        </div>
        <div className="tall">
          <img
            src="https://images.pexels.com/photos/5766819/pexels-photo-5766819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="pic"
          />
        </div>
        <div className="wide">
          <img
            src="https://images.pexels.com/photos/10556474/pexels-photo-10556474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="pic"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/6636463/pexels-photo-6636463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="pic"
          />
        </div>
        <div className="tall">
          <img
            src="https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div className="big">
          <img
            src="https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div className="wide">
          <img
            src="https://images.pexels.com/photos/8622911/pexels-photo-8622911.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div className="big">
          <img
            src="https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div className="tall">
          <img
            src="https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/2582932/pexels-photo-2582932.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div className="wide">
          <img
            src="https://images.pexels.com/photos/2643596/pexels-photo-2643596.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div className="wide">
          <img
            src="https://images.pexels.com/photos/1010496/pexels-photo-1010496.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div className="wide">
          <img
            src="https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div className="big">
          <img
            src="https://images.pexels.com/photos/3260626/pexels-photo-3260626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div className="big">
          <img
            src="https://images.pexels.com/photos/401107/pexels-photo-401107.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div className="tall">
          <img
            src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
        <div className="wide">
          <img
            src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
