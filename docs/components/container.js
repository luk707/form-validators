import React, { Component } from "react";
import { node } from "prop-types";

class Container extends Component {
  static propTypes = {
    children: node
  };
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}

export default Container;
