import { connect } from "react-redux";
import {
  addMessageActionCreator,
  upDateNewMessageTextActionCreator,
} from "../../../Redux/dialogReducer";
import Dialogs from "./Dialogs/Dialogs";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

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

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispathToProps
// )(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, mapDispathToProps),
  withAuthRedirect
)(Dialogs);
// DialogsContainer;
