import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let reRenderEntireTree = (state) => {
  root.render(<App state={state} dispatch={store.dispatch.bind(store)} />);
};

reRenderEntireTree(store.getState());
store.subscribe(reRenderEntireTree);
