import React, { Component } from 'react'

export class Card extends Component {
  render() {
    const {img}=this.props;
    return (
     <img src={img} alt="rasm" />
    )
  }
}

export default Card