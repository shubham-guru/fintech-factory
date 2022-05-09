import React from "react";
import "../css/cryptodata.css";

const CryptoData = (props) => {
  return (
    <div>
        <div className="cryptoDiv">
          <img
            alt="crypto"
            src={props.src}
          />
          <h5>{props.name}</h5>
          <h6>({props.symbol})</h6>
          <p>&#8377;{props.price}</p>
        </div>
    </div>
  );
};

export default CryptoData;
