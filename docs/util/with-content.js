import React from "react";

export default Component => props => (
  <div className="content">
    <Component {...props} />
  </div>
);
