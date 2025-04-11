import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../../../UI/Preloader/Preloader";
import userPhoto from "../../../../../Accetc/MockImages/userCat.jpg";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
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
            src={
              props.profile.photos.large != null
                ? props.profile.photos.large
                : userPhoto
            }
            alt=""
          />
        </div>
        <div className={classes.info__description}>
          <div className={classes.description__name}>
            {props.profile.fullName}
          </div>

          <div className={classes.line}></div>
          <div className={classes.description__text}>
            <div className={classes.text__column1}>
              <ProfileStatus status={"hello Lorem ipsum dolor sit"} />
            </div>
            <div className={classes.text__column2}>
              <p>About me: {props.profile.aboutMe}</p>
              <p>
                I'm looking for a job:
                {props.profile.lookingForAJob ? " yes" : " no"}
              </p>
              <p>
                Job description:
                {props.profile.lookingForAJob
                  ? " " + props.profile.lookingForAJobDescription
                  : " no"}
              </p>
            </div>
            <div className={classes.text__column2}>
              <p>
                Vk:
                <a href={props.profile.contacts.vk}>
                  {props.profile.contacts.vk}
                </a>
              </p>
              <p>
                Instagram:
                <a href={props.profile.contacts.instagram}>
                  {props.profile.contacts.instagram}
                </a>
              </p>
              <p>
                Github:
                <a href={props.profile.contacts.github}>
                  {props.profile.contacts.github}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
