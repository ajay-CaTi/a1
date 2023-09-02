import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "dUser",
});

export default UserContext;
