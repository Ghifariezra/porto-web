import prisma from "@/prismaClient/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const userPosts = await prisma.users.findMany({
    select: {
      id: true,
      username: true,
      blogs: {
        select: {
          id: true,
          user_id: true,
          title: true,
          description: true,
          image: true,
          date: true,
        },
        orderBy: {
          date: "desc",
        },
      },
    },
  });
  return NextResponse.json(userPosts);
}
