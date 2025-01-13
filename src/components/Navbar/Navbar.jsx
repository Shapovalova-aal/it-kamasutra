import React from "react";
import classes from "./Navbar.module.css";
import { NavLink, Link } from "react-router";

const Navbar = (props) => {
  const navActive = ({ isActive }) =>
    isActive ? classes.nav__link + " " + classes.active : classes.nav__link;

  let links = props.links.map((link) => (
    <li key={link.id}>
      <NavLink to={link.url} className={navActive}>
        {link.linkName}
      </NavLink>
    </li>
  ));

  let friends = props.friends.map((friend) => (
    <div key={friend.id} className={classes.friends__item}>
      <img src={friend.url} alt="" />
      <div>{friend.name}</div>
    </div>
  ));

  return (
    <nav className={classes.nav}>
      <nav className={classes.nav__menu}>
        <ul className={classes.nav__list}>
          {links}
          {/* <li>
            <NavLink to={"/"} className={navActive}>
              Profile
            </NavLink>
          </li>

          <li>
            <NavLink to={"/messages"} className={navActive}>
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink to={"/news"} className={navActive}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink to={"/music"} className={navActive}>
              Music
            </NavLink>
          </li>
          <li>
            <NavLink to={"/settings"} className={navActive}>
              Settings
            </NavLink>
          </li> */}
        </ul>
        <div className={classes.nav__friends}>
          Friends
          <div className={classes.friends__container}>{friends}</div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
