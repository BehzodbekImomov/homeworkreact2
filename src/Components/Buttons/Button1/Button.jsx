import React, { Component } from "react";
import "./Button.scss";
export class Button extends Component {
  render() {
    const { desc } = this.props;
    return <button className="btn1"> {desc}</button>;
  }
}

export default Button;
