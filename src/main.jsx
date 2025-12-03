import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";   // <-- Correct import for Vite
window.bootstrap = bootstrap;            // <-- Attach to window

import "./components/styles/globals.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
