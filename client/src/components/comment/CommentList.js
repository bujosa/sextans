import React, { useState, useEffect } from "react";
import { helperComment } from "../../helpers/helper";

export const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async (postId) => {
    const res = await helperComment(`posts/${postId}/comments`);
    setComments(res.data);
  };

  useEffect(() => {
    fetchData(postId);
  }, [postId]);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
