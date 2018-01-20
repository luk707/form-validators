import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import axios from "axios";

const relaseLoader = store => next => action => {
  if (action.type === "SELECT_RELEASE") {
    axios.get(action.payload).then(response => {
      store.dispatch({ type: "SELECT_RELEASE_LOADED", payload: response.data });
    });
  }
  next(action);
};

export default createStore(rootReducer, applyMiddleware(relaseLoader));
