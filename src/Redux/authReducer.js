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
        ...action.payload,
        // isAuth: true,
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

export const setAuthUser = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth,
  },
});

export const getAuth = () => (dispatch) => {
  authAPI.isAuth().then((response) => {
    if (response.resultCode === 0) {
      let { id, email, login } = response.data;
      dispatch(setAuthUser(id, email, login, true));
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

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuth());
    } else {
      console.log("resultCode = ", response.data.resultCode);
    }
  });
};
export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUser(null, null, null, false)); //! false?
    }
  });
};

export default authReducer;
