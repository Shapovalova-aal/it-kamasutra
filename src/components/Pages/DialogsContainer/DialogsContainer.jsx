import { connect } from "react-redux";
import {
  addMessageActionCreator,
  upDateNewMessageTextActionCreator,
} from "../../../Redux/dialogReducer";
// import StoreContext from "../../../StoreContext";
import Dialogs from "./Dialogs/Dialogs";

// const DialogsContainer = () => {
//   //props
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState(); //props.

//         let addMessage = () => {
//           store.dispatch(addMessageActionCreator()); //props.
//         };

//         let onMessageChange = (text) => {
//           store.dispatch(upDateNewMessageTextActionCreator(text)); //props.
//         };

//         return (
//           <Dialogs
//             addMessage={addMessage}
//             onMessageChange={onMessageChange}
//             newMessageText={state.dialogsPage.newMessageText}
//             dialogsElements={state.dialogsPage.dialogsData}
//             messagesElements={state.dialogsPage.messagesData}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
    dialogsElements: state.dialogsPage.dialogsData,
    messagesElements: state.dialogsPage.messagesData,
    isAuth: state.auth.isAuth,
  };
};
let mapDispathToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChange: (text) => {
      dispatch(upDateNewMessageTextActionCreator(text));
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs);

export default DialogsContainer;
