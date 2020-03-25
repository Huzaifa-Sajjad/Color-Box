import React, { Component } from "react";
import Box from "./Box";

class BoxContainer extends Component {
  render() {
    const boxes = [];

    for (let i = 0; i < this.props.maxBoxes; i++) {
      boxes.push(<Box />);
    }

    return <div className="boxContainer">{boxes}</div>;
  }
}

export default BoxContainer;
