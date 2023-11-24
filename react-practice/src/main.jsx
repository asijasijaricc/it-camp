import React from "react";
import ReactDOM from "react-dom/client";
import Class30 from "./components/30. cas";
import ContextProvider from "./components/30. cas/contextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Class30 />
    </ContextProvider>
  </React.StrictMode>
);
