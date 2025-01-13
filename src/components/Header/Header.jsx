import React from "react";
import classes from "./Header.module.css";

const Header = () => {
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
    </header>
  );
};

export default Header;
