import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Readme from "~/README.md";
import PageNotFound from "~/docs/pages/404.mdx";
import withContent from "~/docs/util/with-content";
import withContributionBar from "~/docs/util/with-contribution-bar";

const WrappedReadme = withContributionBar(withContent(Readme), {
  path: "README.md"
});
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
