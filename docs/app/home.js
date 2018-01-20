import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <pre>{JSON.stringify(this.props.state, null, 4)}</pre>
      </div>
    );
  }
}

export default connect(state => ({ state }))(Home);
