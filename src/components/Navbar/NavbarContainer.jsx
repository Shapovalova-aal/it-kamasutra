import { connect } from "react-redux";
import { upDateIsActivePopupCreator } from "../../Redux/navbarReducer";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  return {
    links: state.navBar.links,
    friends: state.navBar.friends,
    isActivePopup: state.navBar.isActivePopup,
  };
};
let mapDispathToProps = (dispatch) => {
  return {
    upDateIsActivePopup: () => {
      dispatch(upDateIsActivePopupCreator());
    },
  };
};
const NavbarContainer = connect(mapStateToProps, mapDispathToProps)(Navbar);

export default NavbarContainer;
