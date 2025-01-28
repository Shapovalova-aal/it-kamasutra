import React from "react";
import classes from "./ButtonWave.module.css";

const ButtonWave = (props) => {
  let addPost = () => {
    props.addPost();
  };
  return (
    <button type="button" className={classes.waveBtn} onClick={addPost}>
      <span className={classes.waveBtn__text}>{props.children}</span>
      <span className={classes.waveBtn__waves}></span>
    </button>
  );
};

export default ButtonWave;
