"use server";

import prisma from "@/app/prismaClient/prisma";
import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "supersecret");

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ error: "Username dan password wajib diisi" }, { status: 400 });
  }

  const user = await prisma.users.findUnique({
    where: { username },
    select: {
      id: true,
      username: true,
      password: true
    },
  });

  if (!user || password !== user.password) {
    return NextResponse.json({ error: "Username atau password salah" }, { status: 401 });
  }

  const token = await new SignJWT({ id: user.id, username: user.username }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("1h").sign(secret);

  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    maxAge: 60 * 60, // 1 jam
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  // A9!xT7@qL2$wZ8^s
  return NextResponse.json({
    success: true,
    message: "Login successful",
  });
}
