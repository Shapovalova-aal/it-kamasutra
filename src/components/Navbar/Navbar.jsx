import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <nav class={classes.nav__menu}>
        <ul class={classes.nav__list}>
          <li>
            <a href="" class={classes.nav__link}>
              Profile
            </a>
          </li>
          <li>
            <a href="" class={classes.nav__link}>
              Messages
            </a>
          </li>
          <li>
            <a href="" class={classes.nav__link}>
              News
            </a>
          </li>
          <li>
            <a href="" class={classes.nav__link}>
              Music
            </a>
          </li>
          <li>
            <a href="" class={classes.nav__link}>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
