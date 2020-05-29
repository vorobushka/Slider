import React, { Component } from 'react'
import './App.css'
import Carousel from '../carousel'
import Slide from '../slide'
import FirstSlide from '../first-slide'
import Pagination from '../pagination'
import ErrorIndicator from '../error-indicator'
import layer4 from '../../assets/lyer4.png'
import layer5 from '../../assets/layer5.png'

export default class App extends Component {

state = {
  hasError: false
}
componentDidMount() {
  window.addEventListener('scroll', this.handleScroll)
  document.getElementById('button-down').addEventListener('click', this.downScroll);
}

componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
  document.getElementById('button-down').removeEventListener('click', this.downScroll);
}

componentDidCatch() {
  this.setState({
    hasError: true
  })
}

handleScroll() {
  const offset = document.documentElement.scrollTop
  const dot = document.getElementById('1')
  const dot2 = document.getElementById('2')
  const dot3 = document.getElementById('3')
  switch (true) {
    case (offset > 900):
      dot.classList.contains('active-dot')
      ? dot.classList.remove('active-dot')
      : dot3.classList.add('active-dot')

      dot2.classList.contains('active-dot')
      ? dot2.classList.remove('active-dot')
      : dot3.classList.add('active-dot')

      dot3.classList.add('active-dot')
        break;
    case (offset > 500 && offset < 899):
      dot.classList.contains('active-dot')
      ? dot.classList.remove('active-dot')
      : dot2.classList.add('active-dot')

      dot3.classList.contains('active-dot')
      ? dot3.classList.remove('active-dot')
      : dot2.classList.add('active-dot')
        break;
    default:
      dot2.classList.contains('active-dot')
      ? dot2.classList.remove('active-dot')
      : dot.classList.add('active-dot')
       
      dot.classList.add('active-dot')
    }
  }

downScroll() {
  document.querySelectorAll('.image')[1].scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
}
  render () {
    const { hasError } = this.state
    if (hasError) {
      return <ErrorIndicator />
    }
    return (
      <>
      <Pagination />
      <FirstSlide src = {
        layer4
      }/>
      <Slide src = {
        layer5
      }/>
      <Carousel />
      </>
    )
  }
}
