import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import navbarReducer from "./navbarReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  navBar: navbarReducer,
});

let store = createStore(reducers);

export default store;
window.store = store;
