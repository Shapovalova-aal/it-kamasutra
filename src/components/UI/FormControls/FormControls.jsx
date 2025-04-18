import React from "react";
import classes from "./FormControls.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  const styleTextarea = hasError ? classes.errorTextarea : "";
  const styleSpan = classes.error + " " + (hasError ? classes.visible : "");

  return (
    <>
      <textarea {...props} {...input} className={styleTextarea} />
      {<span className={styleSpan}>{meta.error}</span>}
    </>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  const styleTextarea = hasError ? classes.errorTextarea : "";
  const styleSpan = classes.error + " " + (hasError ? classes.visible : "");

  return (
    <>
      <input {...props} {...input} className={styleTextarea} />
      {<span className={styleSpan}>{meta.error}</span>}
    </>
  );
};
