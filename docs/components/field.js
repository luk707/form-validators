import React, { Component } from "react";
import { string, oneOf, arrayOf, func } from "prop-types";
import Label from "./label";
import HelpText from "./help-text";
import Control from "./control";

class Field extends Component {
  static propTypes = {
    label: string,
    type: oneOf(["primary", "info", "success", "warning", "danger"]),
    helpText: string,
    leftIcons: arrayOf(string.isRequired),
    rightIcons: arrayOf(string.isRequired),
    value: string,
    onChange: func,
    onBlur: func
  };
  static defaultProps = {
    type: null,
    label: "",
    helpText: "",
    leftIcons: [],
    rightIcons: [],
    value: undefined,
    onChange: () => {},
    onBlur: () => {}
  };
  render() {
    return (
      <div className="field">
        <Label>{this.props.label}</Label>
        <Control
          value={this.props.value}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
          type={this.props.type}
          leftIcons={this.props.leftIcons}
          rightIcons={this.props.rightIcons}
        />
        {this.props.helpText && (
          <HelpText type={this.props.type}>{this.props.helpText}</HelpText>
        )}
      </div>
    );
  }
}

export default Field;
