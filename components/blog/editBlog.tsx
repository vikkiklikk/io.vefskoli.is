// editBlog.tsx
"use client";
import { useState } from "react";

type Props = {
  greetingObj?: {
    _id: string;
    greeting: string;
  };
};

const EditPost = ({ greetingObj }: Props) => {
  const [greeting, setGreeting] = useState("");
  const changePost = () => {
    fetch("../api/blog", {
      method: "PUT",
      body: JSON.stringify({ greeting, id: greetingObj?._id }),
    });
  };

  const deletePost = () => {
    fetch("../api/blog", {
      method: "DELETE",
      body: JSON.stringify({ greeting, id: greetingObj?._id }),
    });
  };

  return (
    <div key={greetingObj?._id.toString()}>
      <h1> {greetingObj?.greeting} </h1>
      <input
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      ></input>
      <button onClick={changePost}>change this greeting</button>
      <button onClick={deletePost}>delete this greeting</button>
    </div>
  );
};

export default EditPost;
