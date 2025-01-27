import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App(props) {
  return (
    <div className="wrapper">
      <Header />

      <Main
        dialogsData={props.state.dialogsPage}
        profileData={props.state.profilePage}
        navbarData={props.state.navBar}
        dispatch={props.dispatch}
      />
      <Footer />
    </div>
  );
}

export default App;
