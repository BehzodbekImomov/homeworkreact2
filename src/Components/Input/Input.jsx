import React, { Component } from 'react'
import  '../Input/Input.scss'
export class Input extends Component {
  render() {
    const {img,desc}=this.props
    return (
        <div className='inp'>
        
        <img src={img} alt="" /> 
        <input   placeholder={desc} type="text" />
        </div>
    )
  }
}

export default Input