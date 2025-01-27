import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <>
      <ProfileInfo name="lorem l." city="lorem" age="40" phone="+732423532" />
      <MyPosts
        postData={props.postData}
        newPostText={props.newPostText}
        dispatch={props.dispatch}
      />
    </>
  );
};

export default Profile;
