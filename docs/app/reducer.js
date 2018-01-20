import { combineReducers } from "redux";

const navbar = (state = { open: false }, action) => {
  switch (action.type) {
    case "TOGGLE_NAVBAR":
      return { ...state, open: !state.open };
    case "CLOSE_NAVBAR":
      return { ...state, open: false };
    default:
      return state;
  }
};

const releases = (state = { loading: false, releases: [] }, action) => {
  switch (action.type) {
    case "LOADING_RELEASES":
      return { ...state, loading: true };
    case "LOADED_RELEASES":
      return { ...state, releases: action.payload, loading: false };
    default:
      return state;
  }
};

const selectedRelease = (
  state = { path: "", loading: true, data: {} },
  action
) => {
  switch (action.type) {
    case "SELECT_RELEASE":
      return { ...state, path: action.payload, loading: true, data: {} };
    case "SELECT_RELEASE_LOADED":
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  navbar,
  releases,
  selectedRelease
});
