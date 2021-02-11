import React, { useState } from "react";
import axios from "axios";

export const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onChange = ({ target }) => {
    setTitle(target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title </label>
          <input
            value={title}
            onChange={onChange}
            className="form-control"></input>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
