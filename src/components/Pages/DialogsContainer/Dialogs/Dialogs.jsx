import classes from "./Dialogs.module.css";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
  let dialogElement = props.dialogsElements.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} url={d.url} />
  ));

  let messagesElements = props.messagesElements.map((m) => (
    <Message
      message={m.message}
      direction={
        m.direction == "message_l" ? classes.message_l : classes.message_r
      }
      id={m.id}
      key={m.id}
    />
  ));

  let addMessage = (formData) => {
    props.addMessage(formData.messageText);
  };

  return (
    <div className={classes.dialogs__container}>
      <div className={classes.dialogs__items}>{dialogElement}</div>
      <div className={classes.messages}>
        {messagesElements}
        <AddMessageReduxForm onSubmit={addMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.addMessage}>
      <Field
        name="messageText"
        placeholder="Your message..."
        component="textarea"
      />
      <button>
        <img src="https://img.icons8.com/?size=100&id=100004&format=png&color=e1e3e6" />
      </button>
    </form>
  );
};
const AddMessageReduxForm = reduxForm({ form: "newMessage" })(AddMessageForm);

export default Dialogs;
