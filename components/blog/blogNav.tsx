import { BlogNavStyle } from "@/styles/pageStyles/blog.styles";
import { FilledButton } from "../buttons";
import Link from "next/link";

const BlogNav = () => {
  return (
    <>
      <BlogNavStyle>
        <Link href="/blog">
          <FilledButton>Posts</FilledButton>
        </Link>
        <Link href="/blog/NewPost">
          <FilledButton>Add a post</FilledButton>
        </Link>
        <Link href="/blog/EditPosts">
          <FilledButton>Edit</FilledButton>
        </Link>
      </BlogNavStyle>
    </>
  );
};

export default BlogNav;
