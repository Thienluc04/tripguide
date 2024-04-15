import { NextRequest, NextResponse } from "next/server";
import { TOKENS_NAME } from "./constants/token.const";
import { LINKS_URL } from "./constants/link-url.const";

const authPaths = ["/sign-up", "/sign-in"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const accessToken = req.cookies.get(TOKENS_NAME.ACCESS_TOKEN)?.value;

  if (authPaths.some((path) => pathname.startsWith(path)) && accessToken) {
    return NextResponse.redirect(new URL(LINKS_URL.HOME, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/sign-up", "/sign-in"],
};
