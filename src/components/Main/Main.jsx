import React from "react";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <Navbar />
      <Profile />
    </main>
  );
};

export default Main;
