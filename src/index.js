import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./Redux/reduxStore";
// import StoreContext, { Provider } from "./StoreContext";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

let reRenderEntireTree = (state) => {
  root.render(
    // <StoreContext.Provider value={store}>
    <Provider store={store}>
      <App
        state={state}
        //  store={store}
      />
    </Provider>
    // </StoreContext.Provider>
  );
};

reRenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  reRenderEntireTree(state);
});
