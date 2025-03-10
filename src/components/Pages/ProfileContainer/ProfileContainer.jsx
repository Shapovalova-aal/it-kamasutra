import React from "react";
import Profile from "../ProfileContainer/Profile/Profile";
// import { setUserProfile } from "../../../../Redux/profileReducer";
import {
  setUserProfile,
  upDateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../Redux/profileReducer";
import axios from "axios";
import { connect } from "react-redux";
class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data);
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
  upDateNewPostText: upDateNewPostTextActionCreator,
  addPost: addPostActionCreator,
})(ProfileContainer);
