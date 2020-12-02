import React from "react";

class Followers extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.follower.login}</div>
      </div>
    );
  }
}
export default Followers;
