import React from "react";
import Follower from "./Follower";

class User extends React.Component {
  render() {
    console.log("followers: ", this.props.followers);
    return (
      <div>
        <div>User</div>
        <img src={this.props.user.avatar_url} alt="user icon" />
        <h2>Name: {this.props.user.name}</h2>
        <p>Login: {this.props.user.login}</p>
        <p>id: {this.props.user.id}</p>

        <p>Follower Count: {this.props.user.followers}</p>
        {this.props.followers.map((follower) => {
          return <Follower follower={follower} key={follower} />;
        })}
        {/* <p>Followers: {this.props.followers}</p> */}
        <p>Following: {this.props.user.following}</p>
      </div>
    );
  }
}
export default User;
