import React from "react";
import Profile from "../ProfileContainer/Profile/Profile";
// import { setUserProfile } from "../../../../Redux/profileReducer";
import {
  setUserProfile,
  upDateNewPostText,
  addPost,
} from "../../../Redux/profileReducer";
import axios from "axios";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { profileAPI } from "../../../API/API";
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
    // axios
    //   .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    profileAPI.getUserProfile(userId).then((response) => {
      //   debugger;
      this.props.setUserProfile(response); //this.props.setUserProfile(response.data);
    });
  }
  render() {
    return <Profile {...this.props} />;
    // profile={this.props.profile}
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  posts: state.profilePage.postData,
  newPostText: state.profilePage.newPostText,
});

export default connect(mapStateToProps, {
  setUserProfile,
  upDateNewPostText,
  addPost,
})(ProfileContainerWrapper);
