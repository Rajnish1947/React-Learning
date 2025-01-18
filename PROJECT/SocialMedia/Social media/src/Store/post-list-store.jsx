import { createContext, useReducer } from "react";
import Post from "../Component/Post";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPost, action) => {
  let newPostList = currPost;
  if (action.type === "DELETE_POST") {
    newPostList = currPost.filter((Post) => Post.id !== action.payload.postId);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPost];
  }
  return newPostList;
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi friends, I am going to Mumbai for my College for completing the college study",
    reactions: 0,
    userId: "user-9",
    tags: ["vacation", "bihar", "Rampur"],
  },
  {
    id: "2",
    title: "Going to Bihar",
    body: "Hi friends, I am going to Bihar for my Home for roaming the beautiful places",
    reactions: 10,
    userId: "user-23",
    tags: ["bihar", "Rampur", "bindalal"],
  },
];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reaction,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
