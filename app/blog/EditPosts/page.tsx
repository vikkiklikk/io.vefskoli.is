"use client";

import BlogNav from "@/components/blog/blogNav";
import { MainContent } from "@/components/mainLayout";
import { BlogNavStyle } from "@/styles/pageStyles/blog.styles";
import EditPost from "@/components/blog/editBlog";

const EditPostPage = () => {
  return (
    <>
      <MainContent>
        <BlogNavStyle>
          <BlogNav />
        </BlogNavStyle>
        <EditPost />
      </MainContent>
    </>
  );
};

export default EditPostPage;
