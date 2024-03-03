import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const root = document.getElementById("root");
// console.log(root, ">>> element in index.js file");

// var fName = document.createElement("name");
// fName.innerHTML = "WishAllll";
// root.appendChild(fName);
