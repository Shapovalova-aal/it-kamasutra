const SET_USER_DATA = "SET-USER-DATA";

let intitialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
  },
});

export default authReducer;
