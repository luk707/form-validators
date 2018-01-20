import React from "react";
import { render } from "react-dom";
import axios from "axios";
import Home from "./home";
import { Provider } from "react-redux";
import store from "./store";

store.dispatch({ type: "LOADING_RELEASES" });

axios.get("releases.json").then(response => {
  store.dispatch({ type: "LOADED_RELEASES", payload: response.data });
  store.dispatch({ type: "SELECT_RELEASE", payload: response.data[0].path });
});

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
