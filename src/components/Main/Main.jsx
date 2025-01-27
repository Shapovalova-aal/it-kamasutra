import React from "react";
import Navbar from "../Navbar/Navbar";
import Profile from "../Pages/Profile/Profile";
import Settings from "../Pages/Settings/Settings";
import Dialogs from "../Pages/Dialogs/Dialogs";
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
                  postData={props.profileData.postData}
                  newPostText={props.profileData.newPostText}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/messages/*"
              element={
                <Dialogs
                  messagesData={props.dialogsData.messagesData}
                  dialogsData={props.dialogsData.dialogsData}
                  newMessageText={props.dialogsData.newMessageText}
                  dispatch={props.dispatch}
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
