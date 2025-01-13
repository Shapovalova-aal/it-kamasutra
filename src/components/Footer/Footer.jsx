import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__copy}>Copy, 2024</div>
      <div className={classes.footer__text}>Lorem ipsum dolor sit amet.</div>
    </footer>
  );
};

export default Footer;
