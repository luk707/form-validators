import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Readme from "~/README.md";
import PageNotFound from "~/docs/pages/404.mdx";
import withContent from "~/docs/util/with-content";

const WrappedReadme = withContent(Readme);
const WrappedPageNotFound = withContent(PageNotFound);

class RouterComponent extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={WrappedReadme} />
        <Route component={WrappedPageNotFound} />
      </Switch>
    );
  }
}

export default RouterComponent;
