import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubUser: {},
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/s-munro")
      .then((res) => {
        console.log(res);
        this.setState({
          githubUser: res.data,
        });
        this.updateFollowers(res.data.followers_url);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateFollowers = (url) => {
    axios.get(url).then((res) => {
      this.setState({
        followers: res.data,
      });
    });
  };

  //   axios
  //     .get(`${this.state.githubUser.followers_url}`)
  //     .then((res) => {
  //       this.setState({
  //         followers: res.data.login,
  //       });
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    return (
      <div className="App">
        <div>
          <UserCard
            user={this.state.githubUser}
            followers={this.state.followers}
          />
        </div>
      </div>
    );
  }
}

export default App;
