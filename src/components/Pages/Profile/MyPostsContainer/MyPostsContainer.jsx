import MyPosts from "./MyPosts/MyPosts";
import {
  upDateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../../Redux/profileReducer";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let onPostCange = (text) => {
    let action = upDateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return (
    <MyPosts
      upDateNewPostText={onPostCange}
      addPost={addPost}
      posts={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
