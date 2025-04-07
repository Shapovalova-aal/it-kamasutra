import { profileAPI } from "../API/API";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
let initialState = {
  postData: [
    { id: 1, message: "hi ", likesCount: 11 },
    { id: 2, message: " hello", likesCount: 3 },
    { id: 3, message: "hello tr,hlrt ", likesCount: 0 },
    {
      id: 4,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ut?",
      likesCount: 3,
    },
  ],
  newPostText: "it-kamasutra",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postData.length + 1, //5
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const upDateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfilePage = (userId) => (dispatch) => {
  profileAPI.getUserProfile(userId).then((response) => {
    dispatch(setUserProfile(response));
  });
};
export default profileReducer;
