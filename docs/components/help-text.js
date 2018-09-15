import React, { Component } from "react";
import { node, oneOf } from "prop-types";
import classnames from "classnames";

class HelpText extends Component {
  static propTypes = {
    children: node,
    type: oneOf(["primary", "info", "success", "warning", "danger"])
  };
  static defaultProps = {
    type: null,
    children: null
  };
  render() {
    return (
      <p
        className={classnames(
          "help",
          this.props.type && `is-${this.props.type}`
        )}
      >
        {this.props.children}
      </p>
    );
  }
}

export default HelpText;
