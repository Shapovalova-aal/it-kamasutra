import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPostsContainer/MyPostsContainer";
const Profile = (props) => {
  return (
    <>
      <ProfileInfo name="lorem l." city="lorem" age="40" phone="+732423532" />
      <MyPostsContainer
      //   store={props.store}
      />
    </>
  );
};

export default Profile;
