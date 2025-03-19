import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import axios from "axios";
import { setAuthUserData } from "../../Redux/authReducer";
import { authAPI } from "../../API/API";
class HeaderContainer extends React.Component {
  componentDidMount() {
    // axios
    //   .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    //     withCredentials: true,
    //   })
    authAPI.isAuth().then((response) => {
      //   debugger;
      if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        this.props.setAuthUserData(id, email, login);
      }
      //    if (response.data.resultCode === 0) {
      //      let { id, email, login } = response.data.data;
      //      this.props.setAuthUserData(id, email, login);
      //    }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
