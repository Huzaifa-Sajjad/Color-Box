import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "rgb(0,0,0)"
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);
    this.setState({ bgColor: `rgb(${R},${G},${B})` });
  }

  render() {
    return (
      <div
        className="box"
        style={{ backgroundColor: this.state.bgColor }}
        onClick={this.changeColor}
      ></div>
    );
  }
}

export default Box;
