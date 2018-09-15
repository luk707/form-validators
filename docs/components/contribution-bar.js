import React, { Component, Fragment } from "react";
import { string } from "prop-types";
import axios from "axios";
import Level from "~/docs/components/level";
import TimeAgo from "react-time-ago/no-tooltip";
import Authors from "~/docs/components/authors";

class ContributionBar extends Component {
  static propTypes = {
    path: string.isRequired
  };
  state = {
    fetching: true,
    error: false,
    authors: [],
    lastModified: null,
    commit: null
  };
  componentDidMount() {
    axios
      .get(
        `https://api.github.com/repos/luk707/form-validators/commits?path=${
          this.props.path
        }`
      )
      .then(response => response.data)
      .then(data => {
        if (data.length) {
          const authors = data
            .slice()
            .reverse()
            .reduce(
              (acc, commit) => ({
                ...acc,
                [commit.author.id]: {
                  ...commit.author,
                  name: commit.commit.committer.name
                }
              }),
              {}
            );
          this.setState({
            fetching: false,
            authors: Object.keys(authors).map(author => authors[author]),
            lastModified: new Date(data[0].commit.author.date),
            commit: data[0]
          });
          return;
        }
        this.setState({ fetching: false });
        return;
      })
      .catch(error => {
        this.setState({ error, fetching: false });
      });
  }
  render() {
    return (
      <Fragment>
        <Level
          left={
            this.state.fetching ? (
              <div>Loading...</div>
            ) : (
              <Authors
                authors={this.state.authors.map(author => ({
                  id: author.id,
                  name: author.name,
                  image: author.avatar_url,
                  url: author.html_url
                }))}
              />
            )
          }
          right={
            <a
              href={`https://github.com/luk707/form-validators/blob/master/${
                this.props.path
              }`}
            >
              <i className="fal fa-pencil-alt" /> Edit this page
            </a>
          }
        />
        {this.state.commit && (
          <small>
            Last modified <TimeAgo>{this.state.lastModified}</TimeAgo>{" "}
            <a href={this.state.commit.html_url}>
              <i className="fal fa-code-commit" />{" "}
              {this.state.commit.sha.substring(0, 6)}
            </a>
          </small>
        )}
      </Fragment>
    );
  }
}

export default ContributionBar;
