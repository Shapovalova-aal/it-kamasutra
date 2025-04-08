import React from "react";
import Profile from "../ProfileContainer/Profile/Profile";
import {
  //   setUserProfile,
  upDateNewPostText,
  addPost,
  getUserProfilePage,
} from "../../../Redux/profileReducer";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router";
function ProfileContainerWrapper(props) {
  const userId = useParams();
  return <ProfileContainer {...props} userId={userId} />;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.userId.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfilePage(userId);
    // profileAPI.getUserProfile(userId).then((response) => {
    //   this.props.setUserProfile(response); //this.props.setUserProfile(response.data);
    // });
  }
  render() {
    //!!!! if (!this.props.isAuth) return <Navigate to={"/login"} />;
    if (this.props.isAuth === false) return <Navigate to={"/login"} />;
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  posts: state.profilePage.postData,
  newPostText: state.profilePage.newPostText,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  //   setUserProfile,
  upDateNewPostText,
  addPost,
  getUserProfilePage,
})(ProfileContainerWrapper);
