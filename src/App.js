import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeaderContainer from "./components/Header/HeaderContainer";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../src/components/Pages/Login/Login";
import { render } from "@testing-library/react";
import { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getAuth } from "./Redux/authReducer";
import Preloader from "./components/UI/Preloader/Preloader";

class App extends Component {
  componentDidMount() {
    // this.props.initializeApp();
    this.props.getAuth();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <div className="wrapper">
        <BrowserRouter>
          <HeaderContainer />
          <Main />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default connect(mapStateToProps, { getAuth })(App);
