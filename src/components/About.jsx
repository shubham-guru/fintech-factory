import React, { useEffect } from 'react';
import banner from "../images/banner.png";
import "../css/about.css";


const About = () => {
  useEffect(()=>{
    window.scroll(0,0)
  }, [])
  return (
    <div className='secondSection'>
        <img src={banner} alt="banner"/>
        <div className='blueBox'>
          <h1 className="title2">ABOUT FINTECH FACTORY</h1>
          <hr className="divider" />
          <p>
          We are Fintech Factory, India’s most trusted platform that helps you 
          buy Plug & Play pre-configured mining rigs in the most hassle-free 
          ways. <br/>
          With things looking quite favorable, India is now firmly saddled on 
          the galloping horse of cryptocurrencies, of which Ethereum and Helium 
          are fast becoming favorites. These need the backing of the right 
          equipment that helps you mine them fast. Now is your chance to be a 
          part of the crypto world either as a miner or a lay investor looking 
          for passive income.<br/> Either way, you get to earn handsomely with all 
          the services on our platform. Fintech Factory is here to help you with 
          Blockchain Mining, Creating and storing Digital Assets, Digital 
          Investments, and other forms of Cryptocurrencies. 
          </p>
          <div className="button2">CONTACT</div>
        </div>
    </div>
  )
}

export default About;