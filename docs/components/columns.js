import React, { Component } from "react";
import { node } from "prop-types";

class Columns extends Component {
  static propTypes = {
    children: node
  };
  render() {
    return <div className="columns">{this.props.children}</div>;
  }
}

export default Columns;
