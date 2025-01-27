import React from "react";
import classes from "./Post.module.css";
const Post = (props) => {
  let isActive =
    props.likesCount > 0 ? classes.like + " " + classes.active : classes.like;

  return (
    <div className={classes.posts__item}>
      <div className={classes.item__logo}></div>
      <div className={classes.item__text}>{props.message}</div>
      <div className={classes.likes}>
        {props.likesCount}
        <div className={isActive}></div>
      </div>
    </div>
  );
};

export default Post;
