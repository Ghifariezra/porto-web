import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "supersecret");

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json({ isLoggedIn: false }, { status: 200 });
  }

  try {
    const { payload } = await jwtVerify(token, secret);
    return NextResponse.json({ isLoggedIn: true, user: payload }, { status: 200 });
  } catch {
    return NextResponse.json({ isLoggedIn: false }, { status: 200 });
  }
}
