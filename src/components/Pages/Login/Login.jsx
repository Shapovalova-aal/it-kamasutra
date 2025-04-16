import React from "react";
import classes from "./Login.module.css";
import ButtonGrey from "../../UI/button/ButtonGrey/ButtonGrey";
import { Field, reduxForm } from "redux-form";

const onSubmit = (formData) => {
  console.log(formData);
  // dispatch
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type={"text"}
          placeholder={"login"}
          component={"input"}
          name={"login"}
        />
      </div>
      <div>
        <Field
          type={"password"}
          placeholder={"password"}
          component={"input"}
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
