import React, { Component } from "react";
import { node } from "prop-types";

class Level extends Component {
  static propTypes = {
    left: node,
    right: node
  };
  render() {
    return (
      <div className="level">
        <div className="level-left">{this.props.left}</div>
        <div className="level-right">{this.props.right}</div>
      </div>
    );
  }
}

export default Level;
