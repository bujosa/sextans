import React, { useState } from "react";
import { helperComment } from "../helpers/helper";

export const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onChange = ({ target }) => {
    setContent(target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await helperComment(`posts/${postId}/comments`, { content }, "POST");

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input value={content} className="form-control" onChange={onChange} />
        </div>
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
