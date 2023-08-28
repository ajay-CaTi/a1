const heading = React.createElement(
  "div",
  { className: "parent" },
  React.createElement(
    "div",
    { className: "child" },
    React.createElement("h1", { className: "heading1" }, "Heading")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
