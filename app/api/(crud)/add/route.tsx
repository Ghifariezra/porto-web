import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import prisma from "@/app/lib/prisma";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "supersecret");

export async function POST(req: Request) {
  try {
    // Ambil cookie dari request
    // Output: __next_hmr_refresh_hash__=330; token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJwM0wzcnUjIiwiaWF0IjoxNzQ5NDIzNDg5LCJleHAiOjE3NDk0MjcwODl9.iEUZJ12epOuUG5jT8Oyr0l35SOcUyE5io0CcBUwR6k
    const cookieHeader = req.headers.get("cookie");

    // Ambil token dari cookie
    // Output: eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJwM0wzcnUjIiwiaWF0IjoxNzQ5NDIzNDg5LCJleHAiOjE3NDk0MjcwODl9.iEUZJ12epOuUG5jT8Oyr0l35SOcUyE5io0CcBUwR6k8
    const token = cookieHeader
      ?.split(";")
      .find((c) => c.trim().startsWith("token="))
      ?.split("=")[1];

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verifikasi token dan dapatkan payload-nya
    // Output: { id: 1, username: 'p3L3ru#', iat: 1749423489, exp: 1749427089 }
    const { payload } = await jwtVerify(token, secret);
    console.log(payload);

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
