import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeaderContainer from "./components/Header/HeaderContainer";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../src/components/Pages/Login/Login";
function App(props) {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <HeaderContainer />
        {/* <Routes> */}
        {/* <Route path="/*" element={<Main />} /> */}
        <Main
        //   store={props.store}
        // navbarData={props.state.navBar}
        />
        {/* <Route path="/login" element={<Login />} />
        </Routes> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
