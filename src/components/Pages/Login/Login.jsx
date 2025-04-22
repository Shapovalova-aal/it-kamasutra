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
import { connect } from "react-redux";
import { login } from "../../../Redux/authReducer";
import { Navigate, NavLink } from "react-router";
import classesErrors from "../../UI/FormControls/FormControls.module.css";

const maxLength50 = maxLengthCreator(50);
const minLength8 = minLengthCreator(8);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.input}>
        <Field
          name={"email"}
          placeholder={"email@gmail.com"}
          type={"text"}
          component={Input}
          validate={[required, maxLength50, email]}
        />
      </div>
      <div className={classes.input}>
        <Field
          type={"password"}
          placeholder={"password"}
          component={Input}
          validate={[required, maxLength50, minLength8]}
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
      <div className={classes.errors}>
        <div
          className={
            classesErrors.formSummaryError +
            " " +
            (props.error ? classesErrors.visible : " ")
          }
        >
          {props.error}
        </div>
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

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    // dispatch
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <div className={classes.login}>Login</div>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
