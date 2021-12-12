import React, { Component } from "react";

class ItemCard extends Component {
  state = {};

  renderPageLink = (data) => {
    if (data["url"]) {
      return <a href={data["url"]}>Webpage</a>;
    }
    return null;
  };

  render() {
    const { data } = this.props;
    return (
      <div id="itemcard">
        <div>{data["projectName"]}</div>
        {this.renderPageLink(data)}
        <a href={data["git"]}>GitHub</a>
      </div>
    );
  }
}

export default ItemCard;
