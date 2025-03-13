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
  toggleIsFetching,
  unFollow,
} from "../../../Redux/usersReducer";
import axios from "axios";
import Preloader from "../../UI/Preloader/Preloader";
import { usersAPI } from "../../../API/API";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    // axios
    //   .get(
    //     `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
    //     {
    //       withCredentials: true,
    //     }
    //   )
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUserCount(data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    // axios
    //   .get(
    //     `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
    //     {
    //       withCredentials: true,
    //     }
    //   )
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
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
    isFetching: state.usersPage.isFetching,
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
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUserCount,
  setAmoundNumberPage,
  toggleIsFetching,
})(UsersAPIComponent);

export default UsersContainer;
