import React from "react";
import ReactDOM from "react-dom/client";
import App from "./componente/App.js";
import ErrorBoundary from "./componente/ErrorBoundary.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
