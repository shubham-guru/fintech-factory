import React, { useEffect, useState } from "react";
import CryptoData from "./CryptoData";
import Marquee from "react-fast-marquee";
import axios from "axios";

const CryptoMarquee = () => {
    const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=15&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) =>
        alert("There might be something wrong with the API" + error)
      );
  }, []);
  return (
    <Marquee speed={50} gradient={false} pauseOnHover={true} className="marquee">
        {coins.map((item) => (
          <div className="cryptoData">
            <CryptoData
              key={item.id}
              src={item.image}
              name={item.name}
              symbol={item.symbol}
              price={item.current_price}
            />
          </div>
        ))}
      </Marquee>
  )
}

export default CryptoMarquee; 