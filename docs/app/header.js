import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleNavbar, selectRelease } from "./actions";
import {
  navbarIsOpen,
  releases,
  loadingReleases,
  selectedRelease
} from "./selectors";
import classnames from "classnames";

class Header extends Component {
  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">form-validators</a>
            <div
              className={classnames("navbar-burger", "burger", {
                "is-active": this.props.navbarIsOpen
              })}
              role="button"
              tabIndex={0}
              onClick={this.props.toggleNavbar}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            className={classnames("navbar-menu", {
              "is-active": this.props.navbarIsOpen
            })}
          >
            <div className="navbar-end">
              <div className="navbar-item">
                <div
                  className={classnames("select", "is-rounded", {
                    "is-loading": this.props.loadingReleases
                  })}
                >
                  <select
                    value={this.props.selectedRelease}
                    onChange={event => {
                      this.props.selectRelease(event.target.value);
                    }}
                  >
                    {this.props.releases.map(release => (
                      <option value={release.path}>{release.version}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(
  state => ({
    navbarIsOpen: navbarIsOpen(state),
    releases: releases(state),
    loadingReleases: loadingReleases(state),
    selectedRelease: selectedRelease(state)
  }),
  { toggleNavbar, selectRelease }
)(Header);
