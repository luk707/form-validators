import React, { Component } from "react";
import { node } from "prop-types";

class MenuList extends Component {
  static propTypes = {
    children: node
  };
  render() {
    return <ul className="menu-list">{this.props.children}</ul>;
  }
}

export default MenuList;
