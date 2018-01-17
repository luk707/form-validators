import { Validator, Validation, Value, Values } from "./validation";

export const isValid = (validation: Validation) => validation === undefined;
export const isInvalid = (validation: Validation) =>
  typeof validation === "string";
