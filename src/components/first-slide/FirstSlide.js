import React from 'react'
import './FirstSlide.css'

const FirstSlide = ({
  src
}) => {
  return (
    <>
      <div className = "image">
        <div className='animation pulse'></div>
        <div className='animation pulse2'></div>
        <img src = {
          src
        }
        alt = "slider"></img>
      </div>
      <div className="wrap-button">
        <div className="wrap-text"> Листайте вниз</div>
        <div id="button-down"></div>
      </div>
    </>
  )
}

export default FirstSlide
