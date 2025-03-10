import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
// import MyPostsContainer from "./MyPostsContainer/MyPostsContainer";
import MyPosts from "../Profile/MyPosts/MyPosts";
const Profile = (props) => {
  return (
    <>
      <ProfileInfo {...props} />
      <MyPosts {...props} />
    </>
  );
};

export default Profile;
