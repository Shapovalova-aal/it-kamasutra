import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
  //   let postData = [
  //     { id: 1, message: "hi ", likesCount: 11 },
  //     { id: 2, message: " hello", likesCount: 3 },
  //     { id: 3, message: "hello tr,hlrt ", likesCount: 0 },
  //     {
  //       id: 4,
  //       message:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ut?",
  //       likesCount: 3,
  //     },
  //   ];
  let postElement = props.postData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  return (
    <div className={classes.content__posts}>
      <div className={classes.content__title}>My posts</div>
      <NewPost
        addPost={props.addPost}
        newPostText={props.newPostText}
        upDateNewPostText={props.upDateNewPostText}
      />
      {postElement}
      {/* <Post message={postData[0].message} likesCount={postData[0].likesCount} />
      <Post message={postData[1].message} likesCount={postData[1].likesCount} />
      <Post message={postData[2].message} likesCount={postData[2].likesCount} />
      <Post message={postData[3].message} likesCount={postData[3].likesCount} /> */}
    </div>
  );
};

export default MyPosts;
