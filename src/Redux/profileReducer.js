const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const upDateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default profileReducer;
