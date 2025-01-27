const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  dispatch(action) {
    if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 6,
        message: this._state.dialogsPage.newMessageText,
        direction: "message_r",
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessageText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },

  _state: {
    dialogsPage: {
      messagesData: [
        { id: 1, message: "hi", direction: "message_r" },
        { id: 2, message: "hi!!", direction: "message_l" },
        {
          id: 3,
          message: "Lorem ipsum dolor sit amet.",
          direction: "message_r",
        },
        {
          id: 4,
          message:
            "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
          direction: "message_l",
        },
        { id: 5, message: "hello", direction: "message_r" },
      ],
      newMessageText: "",

      dialogsData: [
        {
          id: 1,
          name: "Alex",
          url: "https://i.pinimg.com/474x/2f/b9/13/2fb9135aeca1d7ed9d9112035ab91754.jpg",
        },
        {
          id: 2,
          name: "Andry",
          url: "https://i.pinimg.com/236x/8d/be/20/8dbe2091b0bbee50cf55fac6bf58f4ab.jpg",
        },
        {
          id: 3,
          name: "Sveta",
          url: "https://i.pinimg.com/736x/c2/9b/b5/c29bb54202c2e8c282dea2be23d15e68.jpg",
        },
        {
          id: 4,
          name: "Dima",
          url: "https://i.pinimg.com/236x/dc/3b/ab/dc3bab373aa0de1532f8be534d787091.jpg",
        },
      ],
    },
    profilePage: {
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
    },
    navBar: {
      links: [
        { id: 1, url: "/", linkName: "Profile" },
        { id: 2, url: "/messages", linkName: "Messages" },
        { id: 3, url: "/news", linkName: "News" },
        { id: 4, url: "/music", linkName: "Music" },
        { id: 5, url: "/settings", linkName: "Settings" },
      ],
      friends: [
        {
          id: 1,
          name: "Alex",
          url: "https://i.pinimg.com/474x/2f/b9/13/2fb9135aeca1d7ed9d9112035ab91754.jpg",
        },
        {
          id: 2,
          name: "Andry",
          url: "https://i.pinimg.com/236x/8d/be/20/8dbe2091b0bbee50cf55fac6bf58f4ab.jpg",
        },
        {
          id: 3,
          name: "Sveta",
          url: "https://i.pinimg.com/736x/c2/9b/b5/c29bb54202c2e8c282dea2be23d15e68.jpg",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("reRender");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const upDateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: text,
});
export const addPostActionCreator = () => ({ type: ADD_POST });
export const upDateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default store;
window.store = store;
