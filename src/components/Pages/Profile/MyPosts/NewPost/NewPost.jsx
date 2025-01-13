import classes from "./NewPost.module.css";

import React from "react";

const NewPost = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    debugger;
    let text = newPostElement.current.value;
    // console.log(text);
    props.addPost(text);
  };

  return (
    <div className={classes.posts__new}>
      <textarea ref={newPostElement} type="text" placeholder="Your news..." />
      <button onClick={addPost} type="button">
        Send
      </button>
    </div>
  );
};

export default NewPost;
