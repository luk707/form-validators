import React, { Fragment } from "react";
import ContributionBar from "~/docs/components/contribution-bar";

export default (Component, contributionBarProps) => props => (
  <Fragment>
    <ContributionBar {...contributionBarProps} />
    <Component {...props} />
  </Fragment>
);
