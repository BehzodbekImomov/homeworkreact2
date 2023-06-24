import React, { Component } from "react";
import "./Button2.scss";
export class Button2 extends Component {
  render() {
    const { title } = this.props;
    return <button className="btn2">{title}</button>;
  }
}

export default Button2;
