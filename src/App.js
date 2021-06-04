import React, { Component } from "react";
import Banner from "./Components/Banner";
import MainBody from "./Components/MainBody";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <MainBody />
      </React.Fragment>
    );
  }
}

export default App;
