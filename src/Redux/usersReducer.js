import { usersAPI } from "../API/API";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_AMOUND_NUMBER_PAGE = "SET-AMOUND-NUMBER-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   fullName: "Alex f",
    //   photoUrl: null, //'https://i.pinimg.com/474x/2f/b9/13/2fb9135aeca1d7ed9d9112035ab91754.jpg'
    //   followed: false,
    //   location: { country: "Russia", city: "Moscow" },
    //   status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    // },
    // {
    //   id: 2,
    //   fullName: "Andry",
    //   photoUrl:
    //     "https://i.pinimg.com/236x/8d/be/20/8dbe2091b0bbee50cf55fac6bf58f4ab.jpg",
    //   followed: false,
    //   location: { country: "Russia", city: "Ekb" },
    //   status: "Loremm dolor sit amet consectetur adipisicing elit.",
    // },
    // {
    //   id: 3,
    //   fullName: "Sveta",
    //   photoUrl:
    //     "https://i.pinimg.com/736x/c2/9b/b5/c29bb54202c2e8c282dea2be23d15e68.jpg",
    //   followed: true,
    //   location: { country: "Russia", city: "SPB" },
    //   status: "Lorem ipsum dolor siipisicing elit.",
    // },
    // {
    //   id: 4,
    //   fullName: "Dima",
    //   photoUrl:
    //     "https://i.pinimg.com/236x/dc/3b/ab/dc3bab373aa0de1532f8be534d787091.jpg",
    //   followed: true,
    //   location: { country: "Russia", city: "VDK" },
    //   status: "Lorem ipsum dolor sit amet consectetur adipiit.",
    // },
  ],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  amoundNumberPage: 20,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUserCount: action.count,
      };
    case SET_AMOUND_NUMBER_PAGE:
      return {
        ...state,
        amoundNumberPage: action.amoundNumberPage,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        // followingInProgress: action.isFetching,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    default:
      return state;
  }
};

export const followSuccess = (userID) => ({
  type: FOLLOW,
  userID,
});
export const unFollowSuccess = (userID) => ({
  type: UNFOLLOW,
  userID,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUserCount = (totalUserCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUserCount,
});
export const setAmoundNumberPage = (amoundNumberPage) => ({
  type: SET_AMOUND_NUMBER_PAGE,
  amoundNumberPage,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUserCount(data.totalCount));
  });
};
export const unfollow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  usersAPI.unfollow(userId).then((resultCode) => {
    if (resultCode == 0) {
      dispatch(unFollowSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });
};
export const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  usersAPI.follow(userId).then((resultCode) => {
    if (resultCode == 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });
};

export default usersReducer;
