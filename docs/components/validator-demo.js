import React, { Component, Fragment } from "react";
import { func } from "prop-types";
import Field from "./field";

import isValid from "form-validators/lib/util/is-valid";

class ValidatorDemo extends Component {
  static propTypes = {
    validator: func
  };
  static defaultProps = {
    validator: () => "NO VALIDATOR SUPPLIED"
  };
  state = {
    value: "",
    pristine: false,
    valid: true,
    error: undefined
  };
  handleChange = value => {
    this.setState({ value, pristine: false });
  };
  validate = () => {
    const error = this.props.validator(this.state.value);
    const valid = isValid(error);
    this.setState({ valid, error, pristine: true });
  };
  render() {
    const { validator, ...rest } = this.props;
    return (
      <Fragment>
        <Field
          {...rest}
          value={this.state.value}
          onChange={this.handleChange}
          onBlur={this.validate}
          type={
            this.state.pristine && (this.state.valid ? "success" : "danger")
          }
          helpText={this.state.error}
        />
      </Fragment>
    );
  }
}

export default ValidatorDemo;
