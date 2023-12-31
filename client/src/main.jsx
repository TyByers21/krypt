import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
  <TransactionsProvider>
    <App />
  </TransactionsProvider>
  </React.StrictMode>
  // document.getElementById("root"),
);

