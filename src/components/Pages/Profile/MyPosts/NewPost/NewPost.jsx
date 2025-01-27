import { upDateNewPostTextActionCreator } from "../../../../../Redux/state";
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
    // props.upDateNewPostText(newPostElement.current.value);
    let text = newPostElement.current.value;
    // props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
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
      <ButtonWave
        //   addPost={props.addPost}
        dispatch={props.dispatch}
      >
        send
      </ButtonWave>
    </div>
  );
};

export default NewPost;
