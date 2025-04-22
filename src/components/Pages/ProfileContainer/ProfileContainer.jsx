import React from "react";
import Profile from "../ProfileContainer/Profile/Profile";
import {
  upDateNewPostText,
  addPost,
  getUserProfilePage,
  getStatus,
  updateStatus,
} from "../../../Redux/profileReducer";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

function ProfileContainerWrapper(props) {
  const userId = useParams();

  return <ProfileContainer {...props} userId={userId} />;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.userId.userId;
    if (!userId) {
      //   userId = 32240;
      userId = this.props.me;
      if (!userId) {
        // debugger;
        // <Navigate to={"/login"} />;  //! не будет работать
        window.location.href = "/login";
        // this.props.history.push("/login"); //! не будет работать
      }
    }
    this.props.getUserProfilePage(userId);
    this.props.getStatus(userId);
  }
  render() {
    //!!!! if (!this.props.isAuth) return <Navigate to={"/login"} />;
    //* if (this.props.isAuth === false) return <Navigate to={"/login"} />;
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  posts: state.profilePage.postData,
  //   newPostText: state.profilePage.newPostText,
  status: state.profilePage.status,
  me: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, {
    // upDateNewPostText,
    addPost,
    getUserProfilePage,
    getStatus,
    updateStatus,
  })
  //   withAuthRedirect
)(ProfileContainerWrapper);
