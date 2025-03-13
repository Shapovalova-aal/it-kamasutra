import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeaderContainer from "./components/Header/HeaderContainer";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router";
function App(props) {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <HeaderContainer />

        <Main
        //   store={props.store}
        // navbarData={props.state.navBar}
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
