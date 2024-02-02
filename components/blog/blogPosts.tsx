import React, { useEffect, useState } from "react";

interface Greeting {
  id: string; // Adjust the type according to your actual data structure
  greeting: string;
}

const BlogPosts = () => {
  const [greetings, setGreetings] = useState<Greeting[]>([]);

  useEffect(() => {
    const fetchGreetings = async () => {
      try {
        const response = await fetch("../api/blog"); // Update the API endpoint
        const data = await response.json();
        setGreetings(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchGreetings();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <>
      {greetings.map((greetingObj) => (
        <h1 key={greetingObj.id}>{greetingObj.greeting}</h1>
      ))}
    </>
  );
};

export default BlogPosts;
