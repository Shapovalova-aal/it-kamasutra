import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let reRenderEntireTree = (state) => {
  //   console.log("reRenderEntireTree");

  root.render(
    <App
      state={state}
      //   addPost={store.addPost.bind(store)}
      //   upDateNewPostText={store.upDateNewPostText.bind(store)}
      //   addMessage={store.addMessage.bind(store)}
      //   upDateNewMessageText={store.upDateNewMessageText.bind(store)}
      dispatch={store.dispatch.bind(store)}
    />
  );
};

reRenderEntireTree(store.getState());
store.subscribe(reRenderEntireTree);
