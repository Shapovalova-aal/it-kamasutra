// import MyPosts from "./MyPosts/MyPosts";
// import {
//   upDateNewPostTextActionCreator,
//   addPostActionCreator,
// } from "../../../../Redux/profileReducer";
// import { connect } from "react-redux";
// import StoreContext from "../../../../StoreContext";

// const MyPostsContainer = () => {
//   //props

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState(); //props.

//         let onPostCange = (text) => {
//           let action = upDateNewPostTextActionCreator(text);
//           store.dispatch(action); //props.
//         };

//         let addPost = () => {
//           store.dispatch(addPostActionCreator()); //props.
//         };
//         return (
//           <MyPosts
//             upDateNewPostText={onPostCange}
//             addPost={addPost}
//             posts={state.profilePage.postData}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

// let mapStateToProps = (state) => {
//   return {
//     posts: state.profilePage.postData,
//     newPostText: state.profilePage.newPostText,
//   };
// };
// let mapDispathToProps = (dispatch) => {
//   return {
//     upDateNewPostText: (text) => {
//       dispatch(upDateNewPostTextActionCreator(text));
//     },
//     addPost: () => {
//       dispatch(addPostActionCreator());
//     },
//   };
// };

// const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts);

// export default MyPostsContainer;
