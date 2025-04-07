import React from "react";
import { connect } from "react-redux";
import FindUsers from "./FindUsers";
import Users from "./Users";
import {
  follow,
  setAmoundNumberPage,
  setCurrentPage,
  setTotalUserCount,
  setUsers,
  toggleFollowingProgress,
  toggleIsFetching,
  unfollow,
  getUsers,
} from "../../../Redux/usersReducer";
// import axios from "axios";
import Preloader from "../../UI/Preloader/Preloader";
// import { usersAPI } from "../../../API/API";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    // this.props.toggleIsFetching(true);
    // usersAPI
    //   .getUsers(this.props.currentPage, this.props.pageSize)
    //   .then((data) => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUserCount(data.totalCount);
    //   });
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
    // this.props.toggleIsFetching(true);
    // usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    // });
  };

  render() {
    return this.props.isFetching ? (
      <Preloader />
    ) : (
      <Users
        pageSize={this.props.pageSize}
        totalUserCount={this.props.totalUserCount}
        setAmoundNumberPage={this.props.setAmoundNumberPage}
        amoundNumberPage={this.props.amoundNumberPage}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        // toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}
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
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

// const mapDispathToProps = (dispatch) => {
//   return {
//     follow: (userID) => {
//       dispatch(followAC(userID));
//     },
//     unFollow: (userID) => {
//       dispatch(unFollowAC(userID));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUserCount: (totalCount) => {
//       dispatch(setTotalUserCountAC(totalCount));
//     },
//     setAmoundNumberPage: (amoundNumberPage) => {
//       dispatch(setAmoundNumberPageAC(amoundNumberPage));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  //   setUsers,
  setCurrentPage,
  //   setTotalUserCount,
  setAmoundNumberPage,
  //   toggleIsFetching,
  toggleFollowingProgress,
  getUsers,
})(UsersAPIComponent);

export default UsersContainer;
