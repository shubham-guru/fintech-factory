import React, {useState, useEffect} from "react";
import "../css/products.css";
import ethereumIcon from '../images/ethereumIcon.png';
import heliumIcon from '../images/heliumIcon.png';
import cloudIcon from '../images/cloudMining.png';
import ProductBox from "./ProductBox";
import clodPi from '../images/clodpi.PNG';
import sensecap from '../images/sensecap.PNG';
import fan from '../images/fan.png';
import svg from '../images/wave.png';
import register from '../images/icons/register.png';
import deposit from '../images/icons/deposit.png';
import withdraw from '../images/icons/bitcoin.png';
import { NavLink } from "react-router-dom";
import Heading from "./Heading";



const Products = () => {
  useEffect(()=>{
    window.scroll(0,0)
  }, [])
  const [display, setDisplay] = useState(true);
  const [ethereum, setEthereum] = useState(false);
  const [helium, setHelium] = useState(false);
  const [cloud, setCloud] = useState(false);

  const handleEthereum = () => {
    setDisplay(false);
    setEthereum(true);
  }
  const handleHelium = () =>{
    setDisplay(false);
    setHelium(true);
  }
  const handleCloud = () =>{
      setDisplay(false);
      setCloud(true);
  }
  return (
    <div className="productDiv">
        <Heading title="START YOUR MINING JOURNEY" />
      <hr className="divider" />

        {display ? <h1 className="shopHead"> Start Your Crypto Mining today with our top-of-the-line 
        products!</h1>: null}
     { display ?
      <div className="mainModal">
        <div className="childModal" onClick={handleEthereum}>
            <img src={ethereumIcon} alt="ethereumIcon"/>
            <p>Ethereum Mining</p>
        </div>

        <div className="childModal" onClick={handleHelium}>
          <img src={heliumIcon} alt="heliumIcon"/>
          <p>Helium Mining</p>
        </div>

        <div className="childModal" onClick={handleCloud}>
          <img src={cloudIcon} alt="cloudIcon"/>
          <p>Cloud Mining</p>
        </div>
      </div> : null}


      {ethereum ? <>
        <div>
          <ProductBox
            src="https://static.gigabyte.com/StaticFile/Image/Global/16bab6cc132b00d423fcc6c65adc642f/Product/29603/webp/1000"
            name="AMD 6600XT Rig : 150MH/s"
            gpu="5 GPU (brand - gigabyte/galax/inno3d)"
            power="300 watts"
            port="8 port mining motherboard"
            psu="PSU 750W modular"
            price="2,25,000"
            avgEarning="9k-12k"
          />
           <ProductBox
            src="https://www.gigabyte.com/WebPage/690/img/9.png"
            name="Nvidia 3060 Rig: 175MH/s"
            gpu="5 GPU (brands : Zotac/gigabyte/galax/inno3D)"
            power="600 watts"
            port="8 port mining motherboard"
            psu="PSU 850W modular"
            price="2,50,000"
            avgEarning="10k-14k"
          />
      </div>

      <div>
          <ProductBox
            src="https://static.gigabyte.com/StaticFile/Image/Global/fad42224e76e400648ee466018762363/Product/23800/png/500"
            name="Nvidia 2060 super : 200 MH/s"
            gpu="5 GPU (brands : Zotac/gigabyte/galax/inno3D)"
            power="600 watts"
            port="8 port mining motherboard"
            psu="PSU 850W modular"
            price="2,95,000"
            avgEarning="11k-16k"
          />

          <ProductBox
            src="https://www.gigabyte.com/FileUpload/Global/WebPage/765/img/9.png"
            name="Nvidia 3060 ti : 220MH/s"
            gpu="5 GPU (brands : Zotac/gigabyte/galax/inno3D)"
            power="600 watts"
            port="8 port mining motherboard"
            psu="PSU 850 watts modular"
            price="3,15,000"
            avgEarning="13k-17k"
          />
        </div>

        <div>
        <ProductBox
            src="https://www.gigabyte.com/FileUpload/Global/WebPage/831/img/9.png"
            name="Nvidia 3070 ti : 300MH/s"
            gpu="5 GPU (brands : Zotac/gigabyte/galax/inno3D)"
            power="875 watts"
            port="8 port mining motherboard"
            psu="PSU 750W modular (2 units)"
            price="4,15,000"
            avgEarning="17k-22k"
          />
        </div>
      </> : null}

      {helium ? 

          <div className="heliumDiv">
            <div>
              <img src={clodPi} alt="clodpi_pic" />
              <h2>Price: &#8377; 75,000/-</h2>
            </div>

            <div>
              <img src={sensecap} alt="sense_cap" />
              <h2>Price: &#8377; 75,000/-</h2>
            </div>
        </div>
     : null}

      {cloud ? <>
        <div className="outterBox">
          <div className="animateBox">
            <h2>Auto Mining</h2>
            <p>Bitcoin.............................................................................................4342.23</p>
            <span className="animateSpan">
              <img src={fan} alt="fan_pic"/>
            </span>
          </div>

          <div className="cloudHeading">
              <h1>Automatic Mining<br/> System</h1>
              <p>Becoming an investor is - open your account get a steady profitable and convenient income!</p>
              <NavLink to="/cloud-plans">Start mining</NavLink>
          </div>
        </div>
        <div className="svgGraphic">
            <div className="cloudSteps">
              <h2>How to start ?</h2>
              <p id="steps">3 easy steps</p>
              <div className="stepsBox">
                <div>
                  <img src={register} alt="icon"/>
                  <p>Register on the site</p>
                </div>
                <div>
                  <img src={deposit} alt="icon"/>
                  <p>Make a Deposit and start mining coin you need</p>
                </div>
                <div>
                  <img src={withdraw} alt="icon"/>
                  <p>Withdraw the earned coins to your currency</p>
                </div>
              </div>
            </div>
           <img src={svg} alt="wave"/>
        </div>
      </> : null}
    </div>
  );
};

export default Products;
