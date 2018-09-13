import getErrorMessage from "~/util/get-error-message";

export const defaultIsEmailErrorMessageGenerator = ({ value }) =>
  `'${value}' is not a valid email address.`;

export default ({
  errorMessage = defaultIsEmailErrorMessageGenerator,
  errorMessageOptions = ({ value, values }) => ({ value, values })
} = {}) => (value, values) =>
  /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)
    ? undefined
    : getErrorMessage(errorMessage, errorMessageOptions({ value, values }));
