import React from "react";
import ReactDOM from "react-dom/client";
import Example from "./components/example";
import Moduls from "./components/exemple.moduls";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Example />
    <Moduls />
  </React.StrictMode>
);
