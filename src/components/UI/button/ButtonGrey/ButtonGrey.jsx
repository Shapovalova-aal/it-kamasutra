import React from "react";
import classes from "./ButtonGrey.module.css";

const ButtonGrey = (props) => {
  let addPost = () => {
    props.addPost();
  };
  return (
    <button
      onClick={addPost}
      className={classes.btn}
      disabled={false}
      type="button"
    >
      {props.children}
    </button>
  );
};

export default ButtonGrey;
