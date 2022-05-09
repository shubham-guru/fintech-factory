import React from 'react';
import '../css/productBox.css';
import nameIoc from '../images/icons/nameIcon.png';
import gpu from '../images/icons/gpu.png';
import power from '../images/icons/thunderbolt.png';
import port from '../images/icons/usb-port.png';
import psu from  '../images/icons/power-supply.png';
import price from '../images/icons/rupee.png';
import frame from '../images/icons/frame.png';
import avgEarning from '../images/icons/earnings.png'


const ProductBox = (props) => {
  return (
    <div className='productBox'>
        <div className='productInnerDiv'>
            <img src={props.src} className="productImg" alt="pic"/>
            <div className='iconDiv'>
              <img src={nameIoc}  alt="nameIcon" />
              <h3>{props.name}</h3>
            </div>

            <div className='iconDiv'>
            <img src={gpu}  alt="gpuIcon" />
            <span>{props.gpu}</span>
            </div>

            <div className='iconDiv'>
            <img src={port}  alt="portIcon" />
            <span>{props.port}</span>
            </div>

            <div className='iconDiv'>
            <img src={power}  alt="powerIcon" />
            <span>{props.power}</span>
            </div>

            <div className='iconDiv'>
            <img src={psu}  alt="psuIcon" />
            <span>{props.psu}</span>
            </div>

            <div className='iconDiv'>
            <img src={frame}  alt="frameIcon" />
            <span>Wooden Frame</span>
            </div>

            <div className='iconDiv'>
            <img src={price}  alt="priceIcon" />
            <span>&#8377;{props.price}</span>
            </div>

            <div className='iconDiv'>
            <img src={avgEarning}  alt="avgPriceIcon" />
            <span id="note">&#8377;{props.avgEarning}</span>
            </div>


        </div>
    </div>
  )
}

export default ProductBox