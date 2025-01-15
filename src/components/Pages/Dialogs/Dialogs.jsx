import { NavLink } from "react-router";
import classes from "./Dialogs.module.css";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

//-----------------------------
const Dialogs = (props) => {
  //   let dialogsData = [
  //     { id: 1, name: "Alex" },
  //     { id: 2, name: "Andry" },
  //     { id: 3, name: "Sveta" },
  //     { id: 4, name: "Dima" },
  //   ];
  //   let messagesData = [
  //     { id: 1, message: "hi", direction: classes.message_r },
  //     { id: 2, message: "hi!!", direction: classes.message_l },
  //     {
  //       id: 3,
  //       message: "Lorem ipsum dolor sit amet.",
  //       direction: classes.message_r,
  //     },
  //     {
  //       id: 4,
  //       message:
  //         "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  //       direction: classes.message_l,
  //     },
  //     { id: 5, message: "hello", direction: classes.message_r },
  //   ];

  let dialogElement = props.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} url={d.url} />
  ));

  let messagesElements = props.messagesData.map((m) => (
    // <Message message={m.message} direction={m.direction} id={m.id} key={m.id} />
    <Message
      message={m.message}
      direction={
        m.direction == "message_l" ? classes.message_l : classes.message_r
      }
      id={m.id}
      key={m.id}
    />
  ));
  let newMessageElement = React.createRef();
  let addMessage = () => {
    props.addMessage();
    // console.log(newMessageElement.current.value);
  };
  let onMessageChange = () => {
    // console.log(newMessageElement.current.value);
    props.upDateNewMessageText(newMessageElement.current.value);
  };

  return (
    <div className={classes.dialogs__container}>
      <div className={classes.dialogs__items}>
        {dialogElement}
        {/* <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />*/}
      </div>
      <div className={classes.messages}>
        {messagesElements}
        {/* <Message
          message={messagesData[0].message}
          direction={messagesData[0].direction}
        /> */}
        <div className={classes.addMessage}>
          <textarea
            ref={newMessageElement}
            type="text"
            placeholder="Your message..."
            value={props.newMessageText}
            onChange={onMessageChange}
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
