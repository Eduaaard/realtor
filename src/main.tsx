import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styled-components/globalStyle";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
