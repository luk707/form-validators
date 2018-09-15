import React, { Component } from "react";
import { node } from "prop-types";

class Label extends Component {
  static propTypes = {
    children: node
  };
  static defaultPropTypes = {
    children: null
  };
  render() {
    return <label className="label">{this.props.children}</label>;
  }
}

export default Label;
