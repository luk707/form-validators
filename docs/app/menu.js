import React, { Component, Fragment } from "react";
import Menu from "~/docs/components/menu";
import MenuLabel from "~/docs/components/menu-label";
import MenuList from "~/docs/components/menu-list";
import { NavLink } from "react-router-dom";

class MenuComponent extends Component {
  state = { filter: "" };
  handleFilter = e => this.setState({ filter: e.target.value });
  render() {
    return (
      <Fragment>
        <input
          className="input is-rounded"
          type="text"
          placeholder="Filter"
          value={this.state.filter}
          onChange={this.handleFilter}
          style={{ marginBottom: "1rem" }}
        />
        <Menu>
          <MenuLabel>General</MenuLabel>
          <MenuList>
            <li>
              <NavLink exact to="/" activeClassName="is-active">
                Getting started
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/examples" activeClassName="is-active">
                Examples
              </NavLink>
            </li>
          </MenuList>
        </Menu>
      </Fragment>
    );
  }
}

export default MenuComponent;
