const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messagesData.length + 1, //6
        message: state.newMessageText,
        direction: "message_r",
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: "",
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessageText,
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const upDateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: text,
});

export default dialogReducer;
