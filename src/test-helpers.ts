import { Validator, Validation, Value, Values } from "./validation";

export const runValidator = (
  validator: Validator,
  value: Value,
  values?: Values
): Validation => validator(value, values);

export const valid = undefined;
