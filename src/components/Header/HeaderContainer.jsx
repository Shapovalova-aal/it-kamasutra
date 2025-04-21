import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { checkUserAuthData, getAuth, logout } from "../../Redux/authReducer";
import { compose } from "redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
    // this.props.checkUserAuthData();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default compose(
  connect(mapStateToProps, {
    getAuth,
    checkUserAuthData,
    logout,
  })
)(HeaderContainer);
