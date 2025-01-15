import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import state from "./Redux/state";
import {
  addPost,
  upDateNewPostText,
  upDateNewMessageText,
  addMessage,
} from "./Redux/state";
const root = ReactDOM.createRoot(document.getElementById("root"));
export let reRenderEntireTree = (state) => {
  root.render(
    <App
      // messagesData={messagesData}
      // dialogsData={dialogsData}
      // postData={postData}
      state={state}
      addPost={addPost}
      upDateNewPostText={upDateNewPostText}
      addMessage={addMessage}
      upDateNewMessageText={upDateNewMessageText}
    />
  );
};
