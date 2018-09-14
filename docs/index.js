import React from "react";
import { render } from "react-dom";
import App from "%/app";
import { MDXProvider } from "@mdx-js/tag";
import "./styles.scss";

const components = {
  // h1: Heading.H1,
  // h2: Heading.H2,
  // ...
  // p: Text,
  // code: Pre,
  // inlineCode: Code,
};

render(
  <MDXProvider components={components}>
    <App />
  </MDXProvider>,
  document.getElementById("app")
);
