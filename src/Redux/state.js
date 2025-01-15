import { reRenderEntireTree } from "../render";

let state = {
  dialogsPage: {
    messagesData: [
      { id: 1, message: "hi", direction: "message_r" },
      { id: 2, message: "hi!!", direction: "message_l" },
      { id: 3, message: "Lorem ipsum dolor sit amet.", direction: "message_r" },
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
};
window.state = state;
export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  console.log(newPost);
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = "";
  reRenderEntireTree(state);
};
export let upDateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  reRenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: 6,
    message: state.dialogsPage.newMessageText,
    direction: "message_r",
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = "";
  reRenderEntireTree(state);
};
export let upDateNewMessageText = (newMessageText) => {
  state.dialogsPage.newMessageText = newMessageText;
  reRenderEntireTree(state);
};
export default state;
