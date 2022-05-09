import React from 'react'

const WhyusBlocks = (props) => {
  return (
          <div className='mainDiv'>
            <div className='whyUsDiv'>
                <img src={props.src} alt="icon" />
                <h2>{props.title}</h2><br/>
                <p>{props.descp}</p>
            </div>
    </div>
  )
}

export default WhyusBlocks