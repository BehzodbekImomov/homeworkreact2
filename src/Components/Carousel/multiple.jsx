import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import { img } from "../CardImgs/Cards";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div>
      
        <Slider {...settings}>
       {img.map((img,index)=> <Card key={index} {...img}/>   ) }
        </Slider>
      </div>
    );
  }
}