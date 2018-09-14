import React, { Component } from "react";
import Layout from "~/docs/app/layout";
import { HashRouter } from "react-router-dom";
import Menu from "~/docs/app/menu";
import Router from "~/docs/app/router";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Layout menu={<Menu />} content={<Router />} />
      </HashRouter>
    );
  }
}

export default App;
