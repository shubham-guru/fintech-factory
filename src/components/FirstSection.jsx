import React from 'react'
import "../css/Firstsection.css";
import blockChain from "../images/blockchain.jpg";
import downArrow from '../images/down-arrow.png';

export const FirstSection = () => {
  return (
    <div className='firstSectionDiv'>
          <div className='blockChainDiv'>
            <img src={blockChain} alt="blockchain_pic"/>
            <div>
              <h1 className='title'>BLOCKCHAIN MINING ?</h1>
              <p>
              Using the wrong tools to mine crypto is like planting a money tree 
              to get money!
              The best miner in the real or crypto world has the sharpest and 
              most powerful tool that lasts long and does its job efficiently 
              and economically.
              And where do you find those tools? <br/> <b>RIGHT HERE !</b>
              </p>
            </div>
           
          </div>
          <div className="arrow"><img src={downArrow} alt="downArrow" /></div>
    </div>
  )
}
