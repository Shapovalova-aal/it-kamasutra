import {
  addMessageActionCreator,
  upDateNewMessageTextActionCreator,
} from "../../../Redux/dialogReducer";
import Dialogs from "./Dialogs/Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(upDateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      addMessage={addMessage}
      onMessageChange={onMessageChange}
      newMessageText={state.dialogsPage.newMessageText}
      dialogsElements={state.dialogsPage.dialogsData}
      messagesElements={state.dialogsPage.messagesData}
    />
  );
};

export default DialogsContainer;
