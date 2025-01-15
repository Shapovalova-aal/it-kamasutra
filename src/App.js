import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App(props) {
  //   debugger;
  return (
    <div className="wrapper">
      <Header />

      <Main
        // messagesData={props.state.messagesData}
        // dialogsData={props.dialogsData}
        // postData={props.postData}

        dialogsData={props.state.dialogsPage}
        profileData={props.state.profilePage}
        navbarData={props.state.navBar}
        addPost={props.addPost}
        upDateNewPostText={props.upDateNewPostText}
        addMessage={props.addMessage}
        upDateNewMessageText={props.upDateNewMessageText}
      />
      <Footer />
    </div>
  );
}

export default App;
