import { NextRequest, NextResponse } from "next/server";
import { PAGES } from "./constants/pages.const";
import { TOKEN_NAME } from "./constants/token.const";

const authPaths = [
  "/sign-up",
  "/sign-in",
  "/forgot-password",
  "/reset-password",
];

const mainPaths = [
  "/hotels",
  "/flights",
  "/car-rentals",
  "/profile",
  "/manage-account",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const accessToken = req.cookies.get(TOKEN_NAME.ACCESS_TOKEN)?.value;

  if (authPaths.some((path) => pathname.startsWith(path)) && accessToken) {
    return NextResponse.redirect(new URL(PAGES.HOME, req.url));
  }

  if (mainPaths.some((path) => pathname.startsWith(path)) && !accessToken) {
    return NextResponse.redirect(new URL(PAGES.LOGIN, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [...authPaths, ...mainPaths],
};
