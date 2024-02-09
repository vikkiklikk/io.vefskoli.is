import { Document, InferSchemaType, Schema, model, models } from "mongoose";

const blogPostSchema = new Schema({
  title: { type: Schema.Types.String, required: true },
  description: { type: Schema.Types.String, required: true },
  createdAt: { type: Schema.Types.Date, required: true },
  updatedAt: { type: Schema.Types.Date, required: true },
});

export type BlogType = InferSchemaType<typeof blogPostSchema>;

type BlogDocument = BlogType & Document;
export const Blog = models.Blog || model<BlogDocument>("Blog", blogPostSchema);
