import { NextRequest, NextResponse } from "next/server";
import { TOKEN_NAME } from "./constants/token.const";
import { PAGES } from "./constants/pages.const";

const authPaths = [
  "/sign-up",
  "/sign-in",
  "/forgot-password",
  "/reset-password",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const accessToken = req.cookies.get(TOKEN_NAME.ACCESS_TOKEN)?.value;

  if (authPaths.some((path) => pathname.startsWith(path)) && accessToken) {
    return NextResponse.redirect(new URL(PAGES.HOME, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/sign-up", "/sign-in"],
};
