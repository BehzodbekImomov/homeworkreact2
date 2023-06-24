import React, { Component } from "react";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
    
  render() {
    
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="btn">
       
        <Slider {...settings}>
       <img src="/bg1.svg" alt="logo" />
       <img src="/bg1.svg" alt="logo" />
       <img src="/bg1.svg" alt="logo" />
      
        </Slider>
      </div>
    );
  }
}