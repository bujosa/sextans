import React from "react";
import { PostCreate } from "./components/post/PostCreate";
import { PostList } from "./components/post/PostList";

export const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
