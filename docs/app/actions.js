export const toggleNavbar = () => ({ type: "TOGGLE_NAVBAR" });

export const selectRelease = path => ({
  type: "SELECT_RELEASE",
  payload: path
});
