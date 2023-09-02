import { Component } from "react";
import UserContext from "./utils/UesrContext";

class UserClass extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "dummy",
        login: "dummy",
        avatar_url: "https://dummy.com/",
      },
    };
    // console.log("child constructor");
    // console.log(props);
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste bhiya");
    }, 1000);
    // console.log("childcdm");
    const data = await fetch("https://api.github.com/users/ajay-CaTi");
    const json = await data.json();

    this.setState({ userInfo: json });

    // console.log(json);
  }

  componentDidUpdate() {
    // console.log("CDUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }

  render() {
    console.log("child render");
    const { id } = this.props;
    const { count } = this.state;
    const { name, login, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h1>Class comp {id}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click
        </button>
        <h2>
          <UserContext.Consumer>
            {(data) => console.log("data", data)}
          </UserContext.Consumer>
        </h2>
        <h2>{count}</h2>
        <h2>{name}</h2>
        <h2>{login}</h2>
        <img src={avatar_url} alt={name} />
      </div>
    );
  }
}

export default UserClass;
