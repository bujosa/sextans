import React from "react";
import { moderation } from "../../helpers/moderation";

export const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    const content = moderation(comment);
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
