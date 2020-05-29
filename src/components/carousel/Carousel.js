import React, { Component } from 'react'
import './Carousel.css'
import layer1 from '../../assets/layer1.png'
import layer3 from '../../assets/layer3.png'
import layer2 from '../../assets/layer2.png'
import Slide from '../slide'

export default class Carousel extends Component {
  state = {
    value: 0
  }
  sliders = [ 
    <Slide src = {
      layer1
    }/>,
    <Slide src = {
      layer2
    }/>,
    <Slide src = {
      layer3
    }/> 
    ]
    inputChange = (e) => {
      let value = e.target.value
      this.setState({
        value
      })
    }
    componentDidMount() {
      const slider = document.querySelector('.range')
      slider.addEventListener('change', () => {
        let x = (slider.value / 2) * -1
        let color = `linear-gradient(260deg, rgb(209, 234, 255) ${x}%, rgba(209, 234, 255, 0.5) ${x}%)`
        slider.style.background = color
      })
     }
   
  render () {
    let { value } = this.state
    return (
      <>
        <div className="slider">
          {this.sliders.map((slide, index) => {
           return(
            <div className="slide" key={index}
            style={{transform: `translateX(${value}%)`}}>
              {slide}
            </div>
           )
         })}
       </div>
       <div className = 'wrap-range'>
          <input type="range" className="range" min="-200" max="0" value="0" step="100" onChange={this.inputChange} value={value}></input>
       <div className='wrap-years'>
         <span>1988</span>
         <span>2009</span>
         <span>2016</span>
       </div>
       </div>
      </>
    )
  }
}
