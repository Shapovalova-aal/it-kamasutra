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

  let togglePopup = (e) => {
    props.upDateIsActivePopup();
    e.stopPropagation();
  };

  let notPopup = React.createRef();
  let closePopup = (e) => {
    if (e.target == notPopup.current) {
      props.upDateIsActivePopup();
    }
  };
  return (
    <>
      <nav className={classes.nav}>
        <nav className={classes.nav__menu}>
          <ul className={classes.nav__list}>{links}</ul>
          <div className={classes.nav__friends}>
            <div className={classes.friends__linkContainer}>
              <div>Friends</div>
              <div onClick={togglePopup} className={classes.friends__link}>
                all
              </div>
            </div>
            <div className={classes.friends__container}>{friends}</div>
          </div>
        </nav>
      </nav>
      <div
        onClick={closePopup}
        className={
          props.isActivePopup ? classes.popup__container : classes.popup__close
        }
        ref={notPopup}
      >
        <div className={classes.popup}>
          <div className={classes.popup__title}>
            Friends
            <div onClick={togglePopup} className={classes.close}></div>
          </div>
          <div className={classes.popup__body}>
            <div className={classes.friends__container}>{friends}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
