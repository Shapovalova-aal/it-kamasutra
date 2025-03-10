import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../../../UI/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <>
      <div className={classes.content__image}></div>
      <div className={classes.content__info}>
        <div className={classes.info__avatar}>
          <img
            src={props.profile.photos.large} //https://i.pinimg.com/736x/ea/11/a8/ea11a8b0dc2395c6c9e6122477293c32.jpg
            alt=""
          />
        </div>
        <div className={classes.info__description}>
          <div className={classes.description__name}>
            {props.profile.fullName}
          </div>
          <div className={classes.description__text}>
            <p>About me: {props.profile.aboutMe}</p>
            <p>Vk: {props.profile.contacts.vk}</p>
            <p>Github: {props.profile.contacts.github}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
