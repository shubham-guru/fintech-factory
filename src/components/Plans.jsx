import React from 'react'

const Plans = props => {
  return (
    <div className='plansCard'>
        <img src={props.src} alt="planet_pic" />
        <h1>{props.name}</h1>
        <table className='tableData' width="100%">
          <tr>
            <td>Earning</td>
            <td className='td'><p id="earn">&#8377; {props.month} / month</p></td>
          </tr>
          <tr>
            <td>Mega Hash</td>
            <td className='td'><h2>{props.mH}</h2></td>
          </tr>
          <tr>
            <td>Tenure</td>
            <td className='td'><p>36 months</p></td>
          </tr>
          <tr>
            <td>Return</td>
            <td className='td'><p>&#8377; {props.return}</p></td>
          </tr>
          <tr>
            <td>APY</td>
            <td className='td'><p>{props.apy}</p></td>
          </tr>
          <tr id="cost">
            <td>Cost</td>
            <td className='td'><p>&#8377; {props.price}</p></td>
          </tr>
        </table>
        
    </div>
  )
}

export default Plans