const parent = React.createElement("div", { className: "parent" }, [
  React.createElement(
    "div",
    { className: "child" },
    React.createElement("h1", { className: "heading1" }, "Heading")
  ),
  React.createElement(
    "div",
    { className: "child" },
    React.createElement("h2", { className: "heading2" }, "Heading2")
  ),
]);

console.log(parent);

// Core of react is above
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
