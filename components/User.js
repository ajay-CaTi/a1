import { useEffect } from "react";

const User = ({ name }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer");
    }, 1000);
    return () => {
      clearInterval(timer);
      // unmounting phase
      console.log("Unmounting done");
    };
  }, []);
  return (
    <div>
      <h1>User Hello {name}</h1>
    </div>
  );
};
export default User;
