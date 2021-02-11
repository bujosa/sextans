import React, { useState, useEffect } from "react";
import { helper } from "../helpers/helper";

export const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await helper("posts");
  };

  return <div></div>;
};
