const ele = React.createElement(
  "div",
  { id: "first" },
  React.createElement("h1", { id: "sec" }, "hey", [
    React.createElement("p", {}, "this is my para"),
    React.createElement("p", {}, "this is second para"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ele);

const ele1 = React.createElement(
  "div",
  { id: "first" },
  React.createElement("h1", { id: "sec" }, "hi second root", [
    React.createElement("p", {}, "this is second my para"),
    React.createElement("p", {}, "this is second para"),
  ])
);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root.render(ele1);
