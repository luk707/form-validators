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
        <p className="control has-icons-right">
          <input
            className="input is-rounded"
            type="text"
            placeholder="Filter"
            value={this.state.filter}
            onChange={this.handleFilter}
            style={{ marginBottom: "1rem" }}
          />
          <span className="icon is-right">
            <i className="fal fa-search" />
          </span>
        </p>
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
