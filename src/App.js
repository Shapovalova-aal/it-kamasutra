import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App(props) {
  return (
    <div className="wrapper">
      <Header />

      <Main
        //   store={props.store}
        navbarData={props.state.navBar}
      />
      <Footer />
    </div>
  );
}

export default App;
