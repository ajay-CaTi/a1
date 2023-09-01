import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
    console.log("Parent contructor");
  }

  componentDidMount() {
    console.log("Parent cDM");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <UserClass name={"ajay"} />
      </div>
    );
  }
}
export default About;
