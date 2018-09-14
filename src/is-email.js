import getErrorMessage from "~/util/get-error-message";

export const defaultIsEmailErrorMessageGenerator = ({ value }) =>
  `'${value}' is not a valid email address.`;

/**
 * Email validator configuration
 * @param {object} options Email validator options
 * @param {string | function} options.errorMessage The error message
 * @returns {validator}
 * @example
 * import { isEmail } from 'form-validators'
 *
 * // Create the email validator
 * const emailValidator = isEmail();
 * emailValidator("email@domain.com"); // undefined
 * emailValidator("not an email address"); // 'not an email address' is not a valid email address.
 *
 * // Define a custom error message
 * const customEmailValidator = isEmail({ errorMessage: "You dun goofed!" });
 * customEmailValidator("email@domain.com"); // undefined
 * customEmailValidator("not an email address"); // You dun goofed!
 *
 * // Optionaly pass a function that recieves the email adress to build a custom error message
 * const dynamicCustomEmailValidator = isEmail({
 *   errorMessage: ({ value }) => `Hmm... I don't think '${value}' is a valid email address.`
 * });
 * dynamicCustomEmailValidator("email@domain.com"); // undefined
 * dynamicCustomEmailValidator("not an email address"); // Hmm... I don't think 'not an email address' is a valid email address.
 */
function isEmail({
  errorMessage = defaultIsEmailErrorMessageGenerator,
  errorMessageOptions = ({ value, values }) => ({ value, values })
} = {}) {
  /**
   *
   * @param {string} value
   * @param {string} values
   * @returns {string | undefined} result
   */
  function validator(value, values) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)
      ? undefined
      : getErrorMessage(errorMessage, errorMessageOptions({ value, values }));
  }
  return validator;
}

export default isEmail;
