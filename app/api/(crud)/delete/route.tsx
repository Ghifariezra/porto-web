// app/api/blog/route.ts
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing blog ID" }, { status: 400 });
    }

    await prisma.blogs.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Failed to delete blog:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
