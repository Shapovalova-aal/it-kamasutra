import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./Redux/reduxStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

let reRenderEntireTree = (state) => {
  root.render(<App state={state} store={store} />);
};

reRenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  reRenderEntireTree(state);
});
