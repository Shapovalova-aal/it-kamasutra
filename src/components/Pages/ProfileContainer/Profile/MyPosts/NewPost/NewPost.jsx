import classes from "./NewPost.module.css";
import React from "react";
import { reduxForm, Field } from "redux-form";

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.posts__new}>
      <Field
        placeholder={"Your news..."}
        name={"newPostText"}
        component={"textarea"}
      />
      <button className={classes.btn}>send</button>
    </form>
  );
};

const NewPostReduxForm = reduxForm({ form: "newPost" })(NewPostForm);

const NewPost = (props) => {
  const addPost = (formData) => {
    props.addPost(formData.newPostText);
  };
  return (
    <>
      <NewPostReduxForm onSubmit={addPost} />
    </>
  );
};

export default NewPost;
