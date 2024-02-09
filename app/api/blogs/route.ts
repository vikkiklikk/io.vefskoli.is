import { NextRequest, NextResponse as res } from "next/server";
import { connectToDatabase } from "@/utils/mongoose-connector";
import { Blog } from "@/models/blogs";

export const GET = async (req: NextRequest) => {
  await connectToDatabase();
  const blogs = await Blog.find({});
  if (blogs === null) {
    return res.json({ message: "Blogs not found" }, { status: 404 });
  }
  return res.json(blogs, { status: 200 });
};
