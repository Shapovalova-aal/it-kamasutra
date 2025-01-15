import classes from "./NewPost.module.css";

import React from "react";

const NewPost = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    // let text = newPostElement.current.value;
    props.addPost();
    // props.upDateNewPostText("");
  };
  let onPostCange = () => {
    props.upDateNewPostText(newPostElement.current.value);
    // console.log();
  };
  return (
    <div className={classes.posts__new}>
      <textarea
        ref={newPostElement}
        onChange={onPostCange}
        value={props.newPostText}
        type="text"
        placeholder="Your news..."
      />
      <button onClick={addPost} type="button">
        Send
      </button>
    </div>
  );
};

export default NewPost;
