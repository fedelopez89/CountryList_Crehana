import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ApolloProvider } from "@apollo/react-common";
import client from "./apollo/client";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
