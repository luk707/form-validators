import React from "react";
import { render } from "react-dom";
import App from "~/docs/app";
import "./styles.scss";
import JavascriptTimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
JavascriptTimeAgo.locale(en);

render(<App />, document.getElementById("app"));
