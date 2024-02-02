"use client";
import { useState } from "react";
import Link from "next/link";

export default function NewPost() {
  const [greeting, setGreeting] = useState("");
  const saveGreeting = () => {
    fetch("../api/blog", {
      method: "POST",
      //The client can only send strings to the server
      //so we need to change our whole object to a string
      body: JSON.stringify({ greeting }),
    });
  };
  return (
    <div>
      <input value={greeting} onChange={(e) => setGreeting(e.target.value)} />
      <Link href="/blog">
        <button onClick={saveGreeting}>send my greeting to the server</button>
      </Link>
    </div>
  );
}
