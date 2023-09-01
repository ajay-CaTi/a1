import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
        Home
      </Link>
      <h2>
        {err.status} - {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
