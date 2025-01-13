import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <>
      <div className={classes.content__image}></div>
      <div className={classes.content__info}>
        <div className={classes.info__avatar}>
          <img
            src="https://i.pinimg.com/736x/ea/11/a8/ea11a8b0dc2395c6c9e6122477293c32.jpg"
            alt=""
          />
        </div>
        <div className={classes.info__description}>
          <div className={classes.description__name}>{props.name}</div>
          <div className={classes.description__text}>
            <p>City: {props.city}</p>
            <p>Age: {props.age}</p>
            <p>Phone: {props.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
