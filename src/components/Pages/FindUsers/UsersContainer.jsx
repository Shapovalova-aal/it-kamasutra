import React from "react";
import { connect } from "react-redux";
import FindUsers from "./FindUsers";
import { followAC, setUsersAC, unFollowAC } from "../../../Redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
    unFollow: (userID) => {
      dispatch(unFollowAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispathToProps)(FindUsers);

export default UsersContainer;
