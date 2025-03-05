import React from "react";
import { connect } from "react-redux";
import FindUsers from "./FindUsers";
import Users from "./Users";
import {
  followAC,
  setCurrentPageAC,
  setTotalUserCountAC,
  setUsersAC,
  unFollowAC,
} from "../../../Redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
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
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUserCount: (totalCount) => {
      dispatch(setTotalUserCountAC(totalCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispathToProps)(Users);

export default UsersContainer;
