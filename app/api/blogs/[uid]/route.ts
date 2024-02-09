import { NextRequest, NextResponse as res } from "next/server";
import { connectToDatabase } from "@/utils/mongoose-connector";
import { Blog } from "@/models/blogs";
import { ObjectId } from "mongodb";

export const GET = async (
  req: NextRequest,
  { params }: { params: { uid: string } }
) => {
  const uid = new ObjectId(params.uid);
  await connectToDatabase();
  console.log("this is uid", uid);
  const blog = await Blog.findOne({ _id: uid });
  if (blog === null) {
    return res.json({ message: "Blog not found" }, { status: 404 });
  }
  return res.json(blog, { status: 200 });
};
export const PUT = async (
  req: NextRequest,
  { params }: { params: { uid: string } }
) => {
  // TODO: Add logic to update the guide

  const uid = new ObjectId(params.uid);
  await connectToDatabase();
  const newBlog = await req.json();
  console.log("this is newBlog", newBlog.order, newBlog.title);
  const blog = await Blog.findOneAndUpdate({ _id: uid }, newBlog);
  console.log("this is blog", blog.order, blog.title);
  return res.json(blog, { status: 200 });
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { uid: string } }
) => {
  const uid = new ObjectId(params.uid);
  await connectToDatabase();
  await Blog.deleteOne({ _id: uid });
  return res.json({ message: "Blog deleted successfully" }, { status: 200 });
};
