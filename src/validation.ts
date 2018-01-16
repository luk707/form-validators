export type Validator = (value: Value, values?: Values) => Validation;
export type Validation = string | undefined;
export type Value = string;
export type Values = { [key: string]: string };
