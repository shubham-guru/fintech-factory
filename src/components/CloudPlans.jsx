import React, { useEffect, useState } from "react";
import '../css/CloudPlans.css';
import Plans from "./Plans";
import mercury from '../images/gif/Mercury.gif';
import mars from '../images/gif/Mars.gif';
import jupiter from '../images/gif/Jupiter.gif'

const CloudPlans = () =>{
    const [ethereum, setEthereum] = useState(false);
    const [helium, setHelium] = useState('');
    useEffect(() => {
        window.scroll(0, 0);
      }, []);
    return(
      <>
        <div className="cloudPlansBox">
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/7212/7212725.png" alt="eth_coin"/>
                <label>Ethereum Mining</label>
                <input type="radio" name="plan" onClick={()=>setEthereum(true)}/>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/6723/6723143.png" alt="helium_coin" />
                <label>Helium Mining</label>
                <input type="radio" name="plan" onClick={()=>setHelium(true)}/>
            </div>
        </div>
        { ethereum ? 
                <>
                    {/* <h1>Ethereum Plans</h1> */}
                    <div className="planetBox">
                      <Plans 
                        src={mercury}
                        name="Mercury"
                        price="2,00,000/-"
                        mH="100 mh/s" 
                        return="3,00,000/-" 
                        apy="16.66%" 
                        month="8,400"
                      />
                        <Plans 
                        src={mars} 
                        name="Mars"
                        price="5,80,000/-" 
                        mH="300 mh/s"
                        return="9,72,000" 
                        apy="22.52%" 
                        month="27,000"
                      />
                          <Plans 
                        src={jupiter} 
                        name="Jupiter"
                        price="10,00,000/-" 
                        mH="500 mh/s"
                        return="18,00,000/-" 
                        apy="26.66%" 
                        month="50,000"
                      />
                    </div>
                </>
                : null
            }
      </>
    )
  }

export default CloudPlans;
