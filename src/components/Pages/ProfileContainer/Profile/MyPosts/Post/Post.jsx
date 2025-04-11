import React from "react";
import classes from "./Post.module.css";
import userPhoto from "../../../../../../Accetc/MockImages/userCat.jpg";
import Preloader from "../../../../../UI/Preloader/Preloader";
const Post = (props) => {
  let isActive =
    props.likesCount > 0 ? classes.like + " " + classes.active : classes.like;
  if (!props.profile) {
    return <Preloader />;
  }
  console.log(props.profile.photos);
  return (
    <div className={classes.posts__item}>
      <div className={classes.item__logo}>
        <img
          src={
            props.profile.photos.small && props.profile.photos.small != null
              ? props.profile.photos.small
              : userPhoto
          }
        />
      </div>
      <div className={classes.item__text}>{props.message}</div>
      <div className={classes.likes}>
        {props.likesCount}
        <div className={isActive}></div>
      </div>
    </div>
  );
};

export default Post;
