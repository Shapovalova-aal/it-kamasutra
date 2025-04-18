import React from "react";
import Navbar from "../Navbar/Navbar";
import Settings from "../Pages/Settings/Settings";
import DialogsContainer from "../Pages/DialogsContainer/DialogsContainer";
import News from "../Pages/News/News";
import Music from "../Pages/Music/Music";
import classes from "./Main.module.css";
import { BrowserRouter, Routes, Route } from "react-router";
import NavbarContainer from "../Navbar/NavbarContainer";
import FindUsers from "../Pages/FindUsers/FindUsers";
import UsersContainer from "../Pages/FindUsers/UsersContainer";
import ProfileContainer from "../Pages/ProfileContainer/ProfileContainer";
import Login from "../Pages/Login/Login";
const Main = (props) => {
  return (
    <>
      {/* <BrowserRouter> */}
      <main className={classes.main}>
        <NavbarContainer />
        <div className={classes.content}>
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/messages/*" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </main>
      {/* </BrowserRouter> */}
    </>
  );
};

export default Main;
