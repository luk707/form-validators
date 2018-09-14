import React, { Component } from "react";
import { node } from "prop-types";

class Menu extends Component {
  static propTypes = {
    children: node
  };
  render() {
    return <aside className="menu">{this.props.children}</aside>;
  }
}

export default Menu;
