// import { useContext, useState } from "react";
// import { PostList as PostListData } from "../Store/post-list-store";
// import Post from "./Post";
// import WelcomeMessage from "./Welcome";
// import Load from "./Load";

// const PostList = () => {
//   const { postList, addInitialPosts } = useContext(PostListData);
//   const [fetching, setFetching] = useState(false);

//   const handleFetchPosts = () => {
//     setFetching(true);
//     const controller = new AbortController();
//     const signal = controller.signal;

//     fetch('https://dummyjson.com/posts', { signal })
//       .then(res => res.json())
//       .then(data => {
//         addInitialPosts(data.posts);
//         setFetching(false);
//       })
//       .catch(error => {
//         console.error('Error fetching posts:', error);
//         setFetching(false);
//       });

//     return () => {
//       console.log("Cleaning up UseEffect");
//       controller.abort();
//     };
//   };

//   return (
//     <>
//       {fetching && <Load />}
//       {postList.length === 0 ? (
//         <WelcomeMessage onGetPostsClick={handleFetchPosts} />
//       ) : (
//         postList.map(post => <Post key={post.id} post={post} />)
//       )}
//     </>
//   );
// };

// export default PostList;
// import { useContext, useState } from "react";
// import { PostList as PostListData } from "../Store/post-list-store";
// import Post from "./Post";
// import WelcomeMessage from "./Welcome";
// import Load from "./Load";
// import { useNavigate } from "react-router-dom";

// const PostList = () => {
//   // Accessing postList and addInitialPosts from context
//   const { postList, addInitialPosts } = useContext(PostListData);
//   // State to manage fetching status
//   const [fetching, setFetching] = useState(false);
//  const negate=useNavigate();

//   const handleFetchPosts = () => {
//     setFetching(true);
//     const controller = new AbortController();
//     const signal = controller.signal;

//     // Fetch posts from the API
//     fetch('https://dummyjson.com/posts', { signal })
//       .then(res => res.json())
//       .then(data => {
//         // Add fetched posts to the context
//         addInitialPosts(data.posts);
//         // Set fetching to false after data is loaded
//         setFetching(false);
//       })
//       .catch(error => {
//         // Handle any errors during fetch
        
//         setFetching(false);
//       });

//     // Cleanup function to abort fetch if component unmounts
//     return () => {
      
//       controller.abort();
//     };
   
//   };
//   negate('/')

//   return (
//     <>
//       {/* Show loading component while fetching */}
//       {fetching && <Load />}
//       {/* Show welcome message if no posts are available */}
//       {postList.length === 0 ? (
//         <WelcomeMessage onGetPostsClick={handleFetchPosts} />
//       ) : (
//         // Render list of posts
//         postList.map(post => <Post key={post.id} post={post} />)
//       )}
//     </>
//   );
// };

// export default PostList;
import { useContext, useState, useEffect } from "react";
import { PostList as PostListData } from "../Store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./Welcome";
import Load from "./Load";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  // Accessing postList and addInitialPosts from context
  const { postList, addInitialPosts } = useContext(PostListData);
  // State to manage fetching status
  const [fetching, setFetching] = useState(false);
  const navigate = useNavigate(); // Corrected typo

  const handleFetchPosts = () => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    // Fetch posts from the API
    fetch('https://dummyjson.com/posts', { signal })
      .then(res => res.json())
      .then(data => {
        // Add fetched posts to the context
        addInitialPosts(data.posts);
        // Set fetching to false after data is loaded
        setFetching(false);
      })
      .catch(error => {
        // Handle any errors during fetch
        setFetching(false);
      });

    // Cleanup function to abort fetch if component unmounts
    return () => {
      controller.abort();
    };
  };

  useEffect(() => {
    navigate('/'); // Correct usage inside useEffect
  }, [navigate]);

  return (
    <>
      {/* Show loading component while fetching */}
      {fetching && <Load />}
      {/* Show welcome message if no posts are available */}
      {postList.length === 0 ? (
        <WelcomeMessage onGetPostsClick={handleFetchPosts} />
      ) : (
        // Render list of posts
        postList.map(post => <Post key={post.id} post={post} />)
      )}
    </>
  );
};

export default PostList;



