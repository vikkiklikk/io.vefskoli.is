"use client";

import BlogNav from "@/components/blog/blogNav";
import { MainContent } from "@/components/mainLayout";
import { BlogNavStyle } from "@/styles/pageStyles/blog.styles";
import NewPost from "@/components/blog/newPost";

const NewPostPage = () => {
  return (
    <>
      <MainContent>
        <BlogNavStyle>
          <BlogNav />
        </BlogNavStyle>
        <NewPost />
      </MainContent>
    </>
  );
};

export default NewPostPage;
