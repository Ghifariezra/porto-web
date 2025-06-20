import prisma from "@/prismaClient/prisma";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function POST(req: NextRequest, props: Props) {
  try {
    const params = await props.params;
    const id = parseInt(params.slug);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
    }

    const data = await req.json();
    const { title, description, content, image, date } = data;

    const updatedBlog = await prisma.blogs.update({
      where: { id },
      data: {
        title,
        description,
        content,
        image,
        updated_at: new Date(date),
      },
    });

    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error) {
    console.error("Failed to update blog:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
