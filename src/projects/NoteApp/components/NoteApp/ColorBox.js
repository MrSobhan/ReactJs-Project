import React, { Component } from "react";

export default class ColorBox extends Component {
  clickHandler(color) {
    this.props.reColor(color);
  }
  render() {
    let { color } = this.props;
    return (
      <div
        className="color-box"
        style={{ backgroundColor: color }}
        onClick={(id) => this.clickHandler(this.props.color)}
      ></div>
    );
  }
}
