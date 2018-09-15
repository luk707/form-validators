import React, { Component } from "react";
import classnames from "classnames";
import { arrayOf, string, func, bool, oneOf } from "prop-types";

class Control extends Component {
  static propTypes = {
    leftIcons: arrayOf(string.isRequired),
    rightIcons: arrayOf(string.isRequired),
    isLoading: bool,
    type: oneOf(["primary", "info", "success", "warning", "danger"]),
    value: string,
    onChange: func,
    onBlur: func
  };
  static defaultProps = {
    leftIcons: [],
    rightIcons: [],
    isLoading: false,
    type: null,
    value: undefined,
    onChange: () => {},
    onBlur: () => {}
  };
  handleChange = e => this.props.onChange(e.target.value);
  handleBlur = e => this.props.onBlur();
  render() {
    return (
      <div
        className={classnames("control", {
          "is-loading": this.props.isLoading,
          "has-icons-left": this.props.leftIcons.length,
          "has-icons-right": this.props.rightIcons.length
        })}
      >
        <input
          value={this.props.value}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          className={classnames(
            "input",
            this.props.type && `is-${this.props.type}`
          )}
        />
        {this.props.leftIcons.map(leftIcon => (
          <span key={leftIcon} className="icon is-small is-left">
            <i className={leftIcon} />
          </span>
        ))}
        {this.props.rightIcons.map(rightIcon => (
          <span key={rightIcon} className="icon is-small is-left">
            <i className={rightIcon} />
          </span>
        ))}
      </div>
    );
  }
}

export default Control;
