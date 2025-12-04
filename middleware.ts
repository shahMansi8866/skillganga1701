import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const role = req.cookies.get("role")?.value;

  const path = req.nextUrl.pathname;

  const isEmployerRoute = path.startsWith("/employer");
  const isJobSeekerRoute = path.startsWith("/jobseeker");

  // Redirect to login if no token
  if (!token && (isEmployerRoute || isJobSeekerRoute)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If logged in but wrong role → block or redirect
  if (isEmployerRoute && role !== "employer") {
    return NextResponse.redirect(new URL("/jobseeker/dashboard", req.url));
  }

  if (isJobSeekerRoute && role !== "jobseeker") {
    return NextResponse.redirect(new URL("/employer/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/employer/:path*",
    "/jobseeker/:path*"
  ],
};
