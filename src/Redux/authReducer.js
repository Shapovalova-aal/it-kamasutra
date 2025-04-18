import { authAPI } from "../API/API";
const SET_USER_DATA = "SET-USER-DATA";
const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";

let intitialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: null, //! not false
};

const authReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};

export const setAuthUser = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
  },
});

export const getAuth = () => (dispatch) => {
  authAPI.isAuth().then((response) => {
    if (response.resultCode === 0) {
      let { id, email, login } = response.data;
      dispatch(setAuthUser(id, email, login));
    }
  });
};
//для того чтобы при залогиненом пользователе при перезаходе не вылазил login //! {
export const setAuthUserData = () => ({
  type: SET_AUTH_USER_DATA,
});
export const checkUserAuthData = () => (dispatch) => {
  authAPI.isAuth().then((response) => {
    if (response.resultCode === 1) {
      dispatch(setAuthUserData());
    }
  });
};
//! }
export default authReducer;
