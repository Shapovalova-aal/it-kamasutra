import React from "react";
import classes from "./Post.module.css";
const Post = () => {
  return (
    <div className={classes.posts__item}>
      <div className={classes.item__logo}></div>
      <div className={classes.item__text}>text</div>
      <div className={`${classes.like}`}></div> {/* ${classes.active}*/}
    </div>
  );
};

export default Post;
