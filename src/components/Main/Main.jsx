import React from "react";
import Navbar from "../Navbar/Navbar";
import Profile from "../Pages/Profile/Profile";
import Settings from "../Pages/Settings/Settings";
import DialogsContainer from "../Pages/DialogsContainer/DialogsContainer";
import News from "../Pages/News/News";
import Music from "../Pages/Music/Music";
import classes from "./Main.module.css";
import { BrowserRouter, Routes, Route } from "react-router";

const Main = (props) => {
  return (
    <BrowserRouter>
      <main className={classes.main}>
        <Navbar
          links={props.navbarData.links}
          friends={props.navbarData.friends}
        />
        <div className={classes.content}>
          <Routes>
            <Route
              path="/"
              element={
                <Profile
                // store={props.store}
                />
              }
            />
            <Route
              path="/messages/*"
              element={
                <DialogsContainer
                // store={props.store}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default Main;
