import React, { Component } from "react";
import { node, string } from "prop-types";

class Columns extends Component {
  static propTypes = {
    children: node,
    width: string
  };
  static defaultProps = {
    width: undefined
  };
  render() {
    return (
      <div className="column" style={{ maxWidth: this.props.width }}>
        {this.props.children}
      </div>
    );
  }
}

export default Columns;
