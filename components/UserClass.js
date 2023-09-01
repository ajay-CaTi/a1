import { Component } from "react";

class UserClass extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("child constructor");
    console.log(props);
  }

  async componentDidMount() {
    console.log("childcdm");
    const data = await fetch("https://api.github.com/users/ajay-CaTi");
    const json = await data.json();
    console.log(json);
  }
  render() {
    console.log("child render");
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>Class comp {name}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click
        </button>
        <h2>{count}</h2>
      </div>
    );
  }
}

export default UserClass;
