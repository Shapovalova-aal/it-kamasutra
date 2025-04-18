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
    dialogsElements: state.dialogsPage.dialogsData,
    messagesElements: state.dialogsPage.messagesData,
    isAuth: state.auth.isAuth,
  };
};
let mapDispathToProps = (dispatch) => {
  return {
    addMessage: (messageText) => {
      dispatch(addMessageActionCreator(messageText));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispathToProps),
  withAuthRedirect
)(Dialogs);
