import prisma from "@/prisma/prisma";
import { NextResponse, NextRequest } from "next/server";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function GET(req: NextRequest, props: Props) {
  const params = await props.params;
  const id = params.slug;

  const blog = await prisma.blogs.findFirst({
    where: { id: parseInt(id) },
    select: {
      id: true,
      title: true,
      description: true,
      content: true,
      date: true,
      image: true,
      updated_at: true,
    },
  });

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}
