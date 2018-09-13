export default (messageGenerator, options) =>
  typeof messageGenerator === "function"
    ? messageGenerator(options)
    : messageGenerator;
