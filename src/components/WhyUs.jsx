import React from "react";
import "../css/whyus.css";

const WhyUs = () => {
  return (
    <div className="whyDiv">
      <div className="svgDiv">
        <p>OUR USP </p>
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
      <p className="usp">
        'Plug and Play' pre configured mining rigs with complete technical
        assistance for 3 years. Recently launched project with an aim of
        spreading max awarness about blockchain technology and its potential to
        revolutionize the economy, totally enhancing mass adoption of digital
        assets and their investments and thus, making blockchain mining hassles
        free by providing every solutions related to blockchain and blockchain
        mining.
      </p>
    </div>
  );
};

export default WhyUs;
