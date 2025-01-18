// import { createContext, useReducer } from "react";

// export const PostList = createContext({
//   postList: [],
//   addPost: () => {},
//   addInialPosts:() =>{},
//   deletePost: () => {},
// });

// const postListReducer = (currPostList, action) => {
//   let newPostList = currPostList;
//   if (action.type === "DELETE_POST") {
//     newPostList = currPostList.filter(
//       (post) => post.id !== action.payload.postId
//     );
//   } else if (action.type === "ADD_INTIAL_POSTS") {
//     newPostList=action.payload.postId
//   } else if (action.type === "ADD_POST") {
//     newPostList = [action.payload, ...currPostList];
//   }
//   return newPostList;
// };

// const PostListProvider = ({ children }) => {
//   const [postList, dispatchPostList] = useReducer(
//     postListReducer,
//    []
//   );

//   const addPost = (userId, postTitle, postBody, reactions, tags) => {
//     dispatchPostList({
//       type: "ADD_POSTS",
//       payload: {
//         id: Date.now(),
//         title: postTitle,
//         body: postBody,
//         reactions: reactions,
//         userId: userId,
//         tags: tags,
//       },
//     });
//   };
//   const addInialPosts = ( posts) => {
//     dispatchPostList({
//       type: "ADD_INTIAL_POST",
//       payload: {
//         posts
//       }
//     });
//   };

//   const deletePost = (postId) => {
//     dispatchPostList({
//       type: "DELETE_POST",
//       payload: {
//         postId,
//       },
//     });
//   };

//   return (
//     <PostList.Provider value={{ postList, addPost,addInialPosts, deletePost }}>
//       {children}
//     </PostList.Provider>
//   );
// };



// export default PostListProvider;
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return currPostList.filter(post => post.id !== action.payload.postId);
    case "ADD_INITIAL_POSTS":
      return [...action.payload.posts, ...currPostList];
    case "ADD_POST":
      return [{ ...action.payload }, ...currPostList];
    default:
      return currPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, addInitialPosts, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
