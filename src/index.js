import React from "react";
import ReactDOM from "react-dom/client"; // Import the new 'client' API
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance
reportWebVitals(console.log);

