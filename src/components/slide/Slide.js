import React from 'react'
import './Slide.css'
const Slide = ({
  src
}) => {
  return (
    <div className = "image">
      <img src = {
        src
      }
      alt = "slide">
      </img>
    </div>
  )
}

export default Slide
