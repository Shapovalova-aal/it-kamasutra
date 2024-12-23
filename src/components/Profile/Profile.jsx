import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div className={classes.content__image}>
        {/* <img
          src="https://i.pinimg.com/736x/a8/a7/8d/a8a78d66ca4677c4edfea76765762894.jpg"
          alt=""
        /> */}
      </div>
      <div className={classes.content__info}>
        <div className={classes.info__avatar}>
          <img
            src="https://i.pinimg.com/736x/ea/11/a8/ea11a8b0dc2395c6c9e6122477293c32.jpg"
            alt=""
          />
        </div>
        <div className={classes.info__description}>
          <div className={classes.description__name}>lorem l.</div>
          <div className={classes.description__text}>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      {/* myposts */}
      <MyPosts />
    </div>
  );
};

export default Profile;
