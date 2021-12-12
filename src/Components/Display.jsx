import React, { Component } from "react";
import ItemCard from "./ItemCard";

class Display extends Component {
  state = {};
  render() {
    const { library } = this.props;
    return (
      <div id="display">
        {library.map((entry) => (
          <ItemCard data={entry} />
        ))}
      </div>
    );
  }
}

export default Display;
