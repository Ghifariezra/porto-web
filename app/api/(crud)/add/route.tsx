import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import prisma from "@/app/lib/prisma";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "supersecret");

export async function POST(req: Request) {
  try {
    // Ambil cookie dari request
    const cookieHeader = req.headers.get("cookie");

    // Ambil token dari cookie
    const token = cookieHeader
      ?.split(";")
      .find((c) => c.trim().startsWith("token="))
      ?.split("=")[1];

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { payload } = await jwtVerify(token, secret);
    // console.log(payload);

    // Ambil user_id dari payload token
    const user_id = payload.id as number;
    if (!user_id) {
      return NextResponse.json({ error: "User ID missing in token" }, { status: 400 });
    }

    const blog = await req.json();
    const { date, title, description, content } = blog;

    const newPost = await prisma.blogs.create({
      data: {
        user_id,
        date: new Date(date),
        title,
        description,
        content,
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Insert failed:", error);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
