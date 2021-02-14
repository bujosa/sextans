import React, { useState } from "react";
import { helper } from "../../helpers/helper";

export const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onChange = ({ target }) => {
    setTitle(target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await helper("posts/create", { title }, "POST");
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
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
