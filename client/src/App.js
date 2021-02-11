import React from "react";
import { PostCreate } from "./components/PostCreate";

export const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
    </div>
  );
};
