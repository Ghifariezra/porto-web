import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function GET(req: NextRequest, props: Props) {
  const params = await props.params;
  const id = params.slug;

  const blog = await prisma.blogs.findFirst({
    where: { id: parseInt(id) },
  });

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}
