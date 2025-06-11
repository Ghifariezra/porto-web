import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import fs from "fs";
import path from "path";

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

    // Cari dulu blog-nya untuk ambil path gambar
    const blog = await prisma.blogs.findUnique({
      where: { id },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Hapus gambar dari filesystem
    if (blog.image) {
      const imagePath = path.join(process.cwd(), "public", blog.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // Hapus data blog dari database
    await prisma.blogs.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Blog and image deleted successfully" });
  } catch (error) {
    console.error("Failed to delete blog:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
