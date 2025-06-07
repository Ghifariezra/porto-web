import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "supersecret");

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // Belum login? redirect ke /admin/login
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  try {
    await jwtVerify(token, secret);

    const res = NextResponse.next();

    // ✅ Tambahkan custom header
    res.headers.set("x-user-authenticated", "true");

    return res;
  } catch (error) {
    console.error("JWT Verification failed:", error);
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path((?!login).*)"],
};
