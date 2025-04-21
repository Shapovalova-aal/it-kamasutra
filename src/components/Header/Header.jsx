import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}></div>
      <div className={classes.header__menu}>
        <ul className={classes.header__list}>
          <li>
            <a href="" className={classes.header__link}>
              Пункт меню
            </a>
          </li>
          <li>
            <a href="" className={classes.header__link}>
              Пункт меню
            </a>
          </li>
          <li>
            <a href="" className={classes.header__link}>
              Пункт меню
            </a>
          </li>
        </ul>
      </div>
      {/* <div > */}
      {props.isAuth ? (
        <div className={classes.header__login}>
          {props.login}
          <button onClick={props.logout} className={classes.btn}></button>
        </div>
      ) : (
        <NavLink to={"/login"} className={classes.header__login}>
          Login
        </NavLink>
      )}
      {/* </div> */}
    </header>
  );
};

export default Header;
