import React, { Component } from "react";
import "./App.css";
import BoxContainer from "./BoxContainer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Color Box</h1>
        <BoxContainer maxBoxes={20} />
      </div>
    );
  }
}

export default App;
