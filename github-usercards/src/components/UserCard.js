import React from "react";
import User from "./User";

class UserCard extends React.Component {
  render() {
    return (
      <div>
        <div>UserCard</div>
        <User user={this.props.user} followers={this.props.followers} />
      </div>
    );
  }
}
export default UserCard;
