import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { OverlayContextProvider } from "./store/OverlayContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter basename="/">
    <OverlayContextProvider>
      <App />
    </OverlayContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
