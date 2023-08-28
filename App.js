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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// This code is not raedy to push in production Why Because it is not optimise, minified, not bundled, compressed, optimise images
