"use client";

import BlogNav from "@/components/blog/blogNav";
import BlogPosts from "@/components/blog/blogPosts";
import { MainContent } from "@/components/mainLayout";
import { BlogNavStyle } from "@/styles/pageStyles/blog.styles";

const Blog = () => {
  return (
    <>
      <MainContent>
        <BlogNavStyle>
          <BlogNav />
        </BlogNavStyle>
        <BlogPosts />
      </MainContent>
    </>
  );
};

export default Blog;
