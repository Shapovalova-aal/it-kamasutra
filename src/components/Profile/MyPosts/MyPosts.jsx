import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classes.content__posts}>
      <div className={classes.content__title}>My posts</div>
      <div className={classes.posts__new}>
        <textarea type="text" placeholder="Your news..." />
        <button type="button">Send</button>
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
