import React, { Component } from "react";
import Container from "%/components/container";
import Columns from "%/components/columns";
import Menu from "%/components/menu";
import MenuLabel from "%/components/menu-label";
import MenuList from "%/components/menu-list";
import Section from "%/components/section";
import Readme from "../../README.md";

class App extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Columns>
            <div className="column is-one-quarter">
              <Menu>
                <MenuLabel>General</MenuLabel>
                <MenuList>
                  <li>
                    <a>Getting started</a>
                  </li>
                </MenuList>
                <MenuLabel>Validators</MenuLabel>
                <MenuList>
                  <li>
                    <a className="is-active">String</a>
                    <ul>
                      <li>
                        <a>isEmail</a>
                      </li>
                    </ul>
                  </li>
                </MenuList>
                <MenuLabel>Advanced</MenuLabel>
                <MenuList>
                  <li>
                    <a>Crafting validators</a>
                  </li>
                  <li>
                    <a>Async validation</a>
                  </li>
                  <li>
                    <a>Contributing</a>
                  </li>
                </MenuList>
              </Menu>
            </div>
            <div className="column" style={{ width: "75%" }}>
              <div className="content">
                <Readme />
              </div>
            </div>
          </Columns>
        </Container>
      </Section>
    );
  }
}

export default App;
