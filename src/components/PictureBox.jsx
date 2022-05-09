import React from 'react'

const PictureBox = (props) => {
  return (
    <div className='pictureBox'>
            <img src={props.src} alt="pic"/>
            <h2>{props.title}</h2>
    </div>
  )
}

export default PictureBox