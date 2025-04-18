import React from "react";
import classes from "./Login.module.css";
import ButtonGrey from "../../UI/button/ButtonGrey/ButtonGrey";
import { Field, reduxForm } from "redux-form";
import { FormControls, Input } from "../../UI/FormControls/FormControls";
import {
  email,
  maxLengthCreator,
  minLengthCreator,
  required,
} from "../../../utils/validators/validators";

const onSubmit = (formData) => {
  console.log(formData);
  // dispatch
};
const maxLength20 = maxLengthCreator(20);
const maxLength8 = maxLengthCreator(9);
const minLength8 = minLengthCreator(8);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.input}>
        <Field
          type={"text"}
          placeholder={"email@gmail.com"}
          component={Input}
          validate={[required, maxLength20, email]}
          name={"login"}
        />
      </div>
      <div className={classes.input}>
        <Field
          type={"password"}
          placeholder={"password"}
          component={Input}
          validate={[required, maxLength20, minLength8]}
          name={"password"}
        />
      </div>
      <div className={classes.checkbox}>
        <Field
          type={"checkbox"}
          component={"input"}
          name={"rememberMe"}
          id={"checkbox"}
          className={classes.checkbox_input}
        />
        <label htmlFor={"checkbox"} className={classes.checkbox_label}>
          Remember me
        </label>
      </div>
      <div>
        <button className={classes.btn}>submit</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <div className={classes.login}>Login</div>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Login;
