import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { selectedListItem, groups, onListSelection } = this.props;
    return (
      <ul id="listgroup">
        {groups.map(({ id, groupName }) => {
          return (
            <li
              key={id}
              className={
                selectedListItem === id ? "list-item active-item" : "list-item"
              }
              onClick={() => onListSelection(id)}
            >
              {groupName}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListGroup;
