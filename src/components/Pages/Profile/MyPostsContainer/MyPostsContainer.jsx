import MyPosts from "./MyPosts/MyPosts";
import {
  upDateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../../Redux/profileReducer";
import StoreContext from "../../../../StoreContext";

const MyPostsContainer = () => {
  //props

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState(); //props.

        let onPostCange = (text) => {
          let action = upDateNewPostTextActionCreator(text);
          store.dispatch(action); //props.
        };

        let addPost = () => {
          store.dispatch(addPostActionCreator()); //props.
        };
        return (
          <MyPosts
            upDateNewPostText={onPostCange}
            addPost={addPost}
            posts={state.profilePage.postData}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
