import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function DELETE(req: NextRequest, props: Props) {
  try {
    const params = await props.params;
    const id = parseInt(params.slug);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
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
