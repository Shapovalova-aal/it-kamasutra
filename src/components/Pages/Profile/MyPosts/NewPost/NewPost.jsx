import { upDateNewPostTextActionCreator } from "../../../../../Redux/profileReducer";
import ButtonGreen from "../../../../UI/button/ButtonGreen/ButtonGreen";
import ButtonWave from "../../../../UI/button/ButtonWave/ButtonWave";
import classes from "./NewPost.module.css";

import React from "react";

const NewPost = (props) => {
  let newPostElement = React.createRef();
  //! если button не компонент
  //!   let addPost = () => {
  //!     props.addPost();
  //!   };
  let onPostCange = () => {
    let text = newPostElement.current.value;
    props.dispatch(upDateNewPostTextActionCreator(text));
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
      {/* <button onClick={addPost} type="button">
        Send
      </button> */}
      <ButtonWave dispatch={props.dispatch}>send</ButtonWave>
    </div>
  );
};

export default NewPost;
