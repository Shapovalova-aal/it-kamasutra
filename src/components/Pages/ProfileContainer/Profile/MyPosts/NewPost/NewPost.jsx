import ButtonGrey from "../../../../../UI/button/ButtonGrey/ButtonGrey";
import ButtonWave from "../../../../../UI/button/ButtonWave/ButtonWave";
import classes from "./NewPost.module.css";
import React from "react";

const NewPost = (props) => {
  let newPostElement = React.createRef();
  let onPostCange = () => {
    let text = newPostElement.current.value;
    props.upDateNewPostText(text);
  };

  return (
    <div className={classes.posts__new}>
      <textarea
        ref={newPostElement}
        onChange={onPostCange}
        value={props.newPostText}
        type="text"
        placeholder="Your news..."
      />
      {/* <ButtonWave addPost={props.addPost}>send</ButtonWave> */}
      <ButtonGrey addPost={props.addPost}> Send </ButtonGrey>
    </div>
  );
};

export default NewPost;
