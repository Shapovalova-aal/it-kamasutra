import React from "react";
import classes from "./ButtonGreen.module.css";

const ButtonGreen = (props) => {
  let addPost = () => {
    props.addPost();
  };
  return (
    <button className={classes.btn} onClick={addPost} type="button">
      {props.children}
    </button>
  );
};

export default ButtonGreen;
