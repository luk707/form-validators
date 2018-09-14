import React, { Component } from "react";
import { node } from "prop-types";
import Section from "~/docs/components/section";
import Container from "~/docs/components/container";
import Columns from "~/docs/components/columns";
import Column from "~/docs/components/column";

class Layout extends Component {
  static propTypes = {
    menu: node.isRequired,
    content: node.isRequired
  };
  render() {
    return (
      <Section>
        <Container>
          <Columns>
            <Column width="25%">{this.props.menu}</Column>
            <Column width="75%">{this.props.content}</Column>
          </Columns>
        </Container>
      </Section>
    );
  }
}

export default Layout;
