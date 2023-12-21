import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("next-auth.session-token")?.value;

  const signInURL = new URL("/", req.url);

  const dashboardURL = new URL("/dashboard", req.url);

  if (!token) {
    if (req.nextUrl.pathname === "/" || req.nextUrl.pathname === "/signup") {
      return NextResponse.next();
    }
    return NextResponse.redirect(signInURL);
  }

  if (req.nextUrl.pathname === "/" || req.nextUrl.pathname === "/signup") {
    return NextResponse.redirect(dashboardURL);
  }
}

export const config = {
  matcher: ["/", "/signup", "/dashboard"],
};
