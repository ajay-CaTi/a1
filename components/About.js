import { Component } from "react";
import User from "./User";

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
        <User id={"ajay"} />
      </div>
    );
  }
}
export default About;
