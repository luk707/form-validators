import React, { Component } from "react";
import { node } from "prop-types";

class Section extends Component {
  static propTypes = {
    children: node
  };
  render() {
    return <div className="section">{this.props.children}</div>;
  }
}

export default Section;
