import classes from "./NewPost.module.css";
import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../../../../utils/validators/validators";
import { Textarea } from "../../../../../UI/FormControls/FormControls";

const maxLength50 = maxLengthCreator(50);

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.posts__new}>
      <Field
        placeholder={"Your news..."}
        name={"newPostText"}
        component={Textarea}
        validate={[required, maxLength50]}
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
