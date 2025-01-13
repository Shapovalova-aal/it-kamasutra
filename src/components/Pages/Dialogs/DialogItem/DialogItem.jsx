import React from "react";
import { NavLink } from "react-router";
import classes from "./DialogItem.module.css";

const DialogItem = (props) => {
  const dialogItemActive = ({ isActive }) =>
    isActive ? classes.dialog__active : "";

  const active =
    dialogItemActive == ""
      ? classes.dialog
      : classes.dialog + " " + classes.active;

  return (
    <div className={classes.dialog}>
      {/*+ " " + classes.active  */}
      {/* <div className={classes.dialog__image}></div> */}
      <img className={classes.dialog__image} src={props.url} alt="" />
      <NavLink to={`/messages/${props.id}`} className={dialogItemActive}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
