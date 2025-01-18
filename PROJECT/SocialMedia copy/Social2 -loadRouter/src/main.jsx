// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import {RouterProvider,  createBrowserRouter } from "react-router-dom"
// import App from './App.jsx'
// import CreatePost from './Component/CreatePost.jsx'
// import { PostList } from './Store/post-list-store.jsx'
// // ye sab ko array me leta hai jo leta ho o pass kar dete hai
// //  const router=createBrowserRouter([{path: '/',element:<App/>},
// //   {path:'/create-post',element:<CreatePost />
// //   }
// //  ])
// //react raouter layout
// const router=createBrowserRouter([{
//   path:'/',element:<App/>,children:[{   
//     path:'/',element:<PostList/>},{path:"/craete-post",element:<CreatePost/>}],
// }])
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
// <RouterProvider router={router}/>
  
//   </StrictMode>,
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './routes/App.jsx';
import CreatePost from './Component/CreatePost.jsx';
import PostList, { PostLoader } from './Component/PostList.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <PostList />,loader:PostLoader
        
       },
      { path: '/create-post', element: <CreatePost /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

