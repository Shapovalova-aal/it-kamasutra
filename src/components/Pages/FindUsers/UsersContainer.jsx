import React from "react";
import { connect } from "react-redux";
import FindUsers from "./FindUsers";
import Users from "./Users";
import {
  followAC,
  setAmoundNumberPageAC,
  setCurrentPageAC,
  setTotalUserCountAC,
  setUsersAC,
  unFollowAC,
} from "../../../Redux/usersReducer";
import axios from "axios";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  //   follow = (
  //     <>
  //       <span>F</span>
  //       <span>o</span>
  //       <span>l</span>
  //       <span>l</span>
  //       <span>o</span>
  //       <span>w</span>
  //     </>
  //   );
  //   unfollow = (
  //     <>
  //       <span>U</span>
  //       <span>n</span>
  //       <span>f</span>
  //       <span>o</span>
  //       <span>l</span>
  //       <span>l</span>
  //       <span>o</span>
  //       <span>w</span>
  //     </>
  //   );

  render() {
    return (
      <Users
        pageSize={this.props.pageSize}
        totalUserCount={this.props.totalUserCount}
        setAmoundNumberPage={this.props.setAmoundNumberPage}
        amoundNumberPage={this.props.amoundNumberPage}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unFollow={this.props.unFollow}
        follow={this.props.follow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    amoundNumberPage: state.usersPage.amoundNumberPage,
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
    setAmoundNumberPage: (amoundNumberPage) => {
      dispatch(setAmoundNumberPageAC(amoundNumberPage));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispathToProps
)(UsersAPIComponent);

export default UsersContainer;
