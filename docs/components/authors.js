import React, { Component } from "react";
import { arrayOf, shape, string, number } from "prop-types";

const size = "36px";
const overlap = "5px";

class Authors extends Component {
  static propTypes = {
    authors: arrayOf(
      shape({
        id: number,
        name: string,
        image: string,
        url: string
      })
    )
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          paddingRight: overlap
        }}
      >
        {this.props.authors
          .slice()
          .reverse()
          .map(author => (
            <a
              href={author.url}
              style={{
                width: size,
                height: size,
                marginRight: `-${overlap}`,
                backgroundSize: `100% 100%`,
                borderRadius: "50%",
                boxShadow: `0 0 0 3px #fff`,
                backgroundImage: `url("${author.image}")`
              }}
            />
          ))}
      </div>
    );
  }
}

export default Authors;
