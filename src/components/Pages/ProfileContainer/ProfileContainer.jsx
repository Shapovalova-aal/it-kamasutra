import React from "react";
import Profile from "../ProfileContainer/Profile/Profile";
import {
  upDateNewPostText,
  addPost,
  getUserProfilePage,
} from "../../../Redux/profileReducer";
import { connect } from "react-redux";
import { useParams } from "react-router";
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
      userId = 32240;
    }
    this.props.getUserProfilePage(userId);
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
  newPostText: state.profilePage.newPostText,
});

export default compose(
  connect(mapStateToProps, {
    upDateNewPostText,
    addPost,
    getUserProfilePage,
  }),
  withAuthRedirect
)(ProfileContainerWrapper);
