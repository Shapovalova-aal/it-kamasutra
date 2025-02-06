import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  navBar: navbarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
window.store = store;
