import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {
  // setAuthUserData,
  getAuth,
} from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    // authAPI.isAuth().then((response) => {
    //   if (response.resultCode === 0) {
    //     let { id, email, login } = response.data;
    //     this.props.setAuthUserData(id, email, login);
    //   }
    // });
    this.props.getAuth();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, {
  // setAuthUserData,
  getAuth,
})(HeaderContainer);
