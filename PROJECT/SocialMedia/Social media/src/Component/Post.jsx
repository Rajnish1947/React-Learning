import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { PostList } from "../Store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-body card-button">
        <h5 className="card-title">
          {post.title}{" "}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger Delete"
            onClick={() => deletePost(post.id)}
          >
            <TiDeleteOutline />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tags">{tag}</span>
        ))}
        <div className="alert alert-danger Reaction" role="alert">
          This post has been reacted by {post.reactions} peapole
        </div>
      </div>
    </div>
  );
};
export default Post;
