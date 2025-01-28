import classes from "./Dialogs.module.css";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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

  let newMessageText = props.newMessageText;

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
  };

  return (
    <div className={classes.dialogs__container}>
      <div className={classes.dialogs__items}>{dialogElement}</div>
      <div className={classes.messages}>
        {messagesElements}
        <div className={classes.addMessage}>
          <textarea
            type="text"
            placeholder="Your message..."
            onChange={onMessageChange}
            value={newMessageText}
          />
          <button onClick={addMessage} type="button">
            <img src="https://img.icons8.com/?size=100&id=100004&format=png&color=e1e3e6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
