import connect from "../../../utils/startMongo";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const client = await connect;
  const cursor = await client.db("test").collection("greetings").find(); // blogposts
  const greetings = await cursor.toArray(); // blogposts
  return NextResponse.json(greetings);
}

export async function POST(request: Request) {
  const client = await connect;
  const body = await request.json();
  await client
    .db("test")
    .collection("greetings")
    .insertOne({ greeting: body.greeting });
  return NextResponse.json({ message: "successfully updated the document" });
}

export async function PUT(request: Request) {
  const client = await connect;
  const body = await request.json();
  const id = new ObjectId(body.id);
  await client
    .db("test")
    .collection("greetings")
    .updateOne({ _id: id }, { $set: { greeting: body.greeting } });
  return NextResponse.json({ message: "successfully updated the document" });
}

export async function DELETE(request: Request) {
  const client = await connect;
  const body = await request.json();
  const id = new ObjectId(body.id);
  await client.db("test").collection("greetings").deleteOne({ _id: id });
  return NextResponse.json({ message: "successfully deleted the document" });
}
