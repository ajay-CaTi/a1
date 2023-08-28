import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = "Hi Bro";

const App = () => {
  return (
    <div>
      <h1>App is here {jsxHeading}</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
