import React, { Component } from "react";
import { node } from "prop-types";

class MenuLabel extends Component {
  static propTypes = {
    children: node
  };
  render() {
    return <p className="menu-label">{this.props.children}</p>;
  }
}

export default MenuLabel;
