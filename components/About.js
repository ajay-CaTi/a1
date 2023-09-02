import { Component } from "react";
import User from "./User";
import UserContext from "./utils/UserContext";

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
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>Hi {loggedInUser}</h1>}
        </UserContext.Consumer>
        <h1>About</h1>
        <User id={"ajay"} />

        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default About;
