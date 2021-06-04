import React, { Component } from "react";

class Display extends Component {
  state = {};
  render() {
    const { library } = this.props;
    return (
      <div id="display">
        {library.map((entry) => (
          <div>{entry["projectName"]}</div>
        ))}
      </div>
    );
  }
}

export default Display;
