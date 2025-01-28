import React from "react";
import classes from "./ButtonWave.module.css";
import { addPostActionCreator } from "../../../../Redux/profileReducer";

const ButtonWave = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  return (
    <button type="button" className={classes.waveBtn} onClick={addPost}>
      <span className={classes.waveBtn__text}>{props.children}</span>
      <span className={classes.waveBtn__waves}></span>
    </button>
  );
};

export default ButtonWave;
