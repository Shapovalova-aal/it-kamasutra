import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
  let postElement = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  return (
    <div className={classes.content__posts}>
      <div className={classes.content__title}>My posts</div>
      <NewPost
        newPostText={props.newPostText}
        addPost={props.addPost}
        upDateNewPostText={props.upDateNewPostText}
      />
      {postElement}
    </div>
  );
};

export default MyPosts;
