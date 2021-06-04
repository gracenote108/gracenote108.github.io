import React, { Component } from "react";
import ListGroup from "./ListGroup";
import Display from "./Display";
import { getProjectLibrary } from "../Repository/RepoManager.js";

class MainBody extends Component {
  state = {
    listgroups: [
      { id: "59a046bf-c921-4409-a421-d638841ead48", groupName: "JavaScript" },
      { id: "4742aadd-1bbf-4b01-b653-d01a23cd25e9", groupName: "Ruby" },
    ],
    selectedList: "",
  };

  handleListSelection = (selectedItem) => {
    this.setState({ selectedList: selectedItem });
  };

  render() {
    const { selectedList } = this.state;

    const library = getProjectLibrary(selectedList);
    return (
      <div id="mainbody" className="flex-row">
        <ListGroup
          selectedListItem={selectedList}
          groups={this.state.listgroups}
          onListSelection={this.handleListSelection}
        />
        <Display library={library} />
      </div>
    );
  }
}

export default MainBody;
