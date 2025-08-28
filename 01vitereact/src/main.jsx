import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

function MyApp() {
  return <div>Custom App</div>;
}

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google through this link!
  </a>
);

// const anotherUser = "Debottam";

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "clickkk meee"
  //   anotherUser
);

createRoot(document.getElementById("root")).render(reactElement);
