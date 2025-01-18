import { useContext } from "react";
import Post from "./Post";
import { PostList as PostlistData } from "../Store/post-list-store";

const PostList = () => {
   const { postList } = useContext(PostlistData);

   return (
      <>
         {postList.map((post) => (
            <Post key={post.id} post={post} />
         ))}
      </>
   );
};

export default PostList;
