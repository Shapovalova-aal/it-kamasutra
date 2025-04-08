import React from "react";
import classes from "./Login.module.css";
const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <div className={classes.login}>Login</div>
        <input type="text" placeholder="login" />
        <input type="password" placeholder="password" />
      </div>
    </div>
  );
};

export default Login;
