// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<App />);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Auth0Provider
    domain="healthverse.uk.auth0.com"
    clientId="FwPe26QTUaarNkGdXwxYBPffnJCcKFLM"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);

// import ReactDOM from "react-dom";
// import App from "./App";
// import { Auth0Provider } from "@auth0/auth0-react";

// ReactDOM.render(
//   <Auth0Provider
//     domain="healthverse.uk.auth0.com"
//     clientId="FwPe26QTUaarNkGdXwxYBPffnJCcKFLM"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById("root")
// );