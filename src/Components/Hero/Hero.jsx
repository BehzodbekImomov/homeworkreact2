import React, { Component } from 'react'
import PauseOnHover from '../Carousel/Carousel'
import "../Hero/Hero.scss"
export class Hero extends Component {
  render() {

    return (
      
        <div className="hero">
        <PauseOnHover />
      <div  className="container ">
        <div className="hero_title">
            <span>LEANGROUP - тубы и этикетки</span>
            <h1>Ламинатные тубы</h1>
            <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
            <button>Каталог</button>
            {/* <PauseOnHover/> */}
        </div>
        </div>
      </div>
    )
  }
}

export default Hero