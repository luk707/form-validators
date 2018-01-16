export type ErrorMessageGenerator<Options> = (options: Options) => string;
export type ErrorMessage<Options> = ErrorMessageGenerator<Options> | string;

export const getErrorMessage = <Options>(
  message: ErrorMessage<Options>,
  options: Options
): string =>
  typeof message === "string"
    ? <string>message
    : (<ErrorMessageGenerator<Options>>message)(options);
