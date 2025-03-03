const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

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
    default:
      return state;
  }
};

export const followAC = (userID) => ({
  type: FOLLOW,
  userID,
});

export const unFollowAC = (userID) => ({
  type: UNFOLLOW,
  userID,
});

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});
export default usersReducer;
