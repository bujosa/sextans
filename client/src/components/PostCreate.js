import React, { useState } from "react";
import { helper } from "../helpers/helper";

export const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onChange = ({ target }) => {
    setTitle(target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await helper("posts", { title }, "POST");
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
