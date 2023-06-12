import { NextRequest, NextResponse } from "next/server";
import middlewareAuth from "./utils/middlewareauth";

export const middleware = async (request: NextRequest) => {
  const url = request.url;
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/profile")) {
    const user = await middlewareAuth(request);
    if (!user) return NextResponse.redirect(new URL("/auth", url));
  }
  if (pathname.startsWith("/admin")) {
    const user = await middlewareAuth(request);
    if (!user) return NextResponse.redirect(new URL("/auth", url));
    if (user && user.role !== "ADMIN")
      return NextResponse.redirect(new URL("/", url));
  }
};

export const config = {
    matcher: ['/admin/:path*', '/profile/:path*']
}