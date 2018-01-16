import {
  getErrorMessage,
  ErrorMessage,
  ErrorMessageGenerator
} from "../error-message";
import { Validator, Validation, Value, Values } from "../validation";

export interface EmailErrorMessageOptions {
  email: Value;
}

const defaultIsEmailErrorMessageGenerator: ErrorMessageGenerator<
  EmailErrorMessageOptions
> = ({ email }) => `'${email}' is not a valid email address.`;

export const isEmail = (
  errorMessage: ErrorMessage<
    EmailErrorMessageOptions
  > = defaultIsEmailErrorMessageGenerator
): Validator => (value: Value): Validation =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  )
    ? undefined
    : getErrorMessage<EmailErrorMessageOptions>(errorMessage, { email: value });
