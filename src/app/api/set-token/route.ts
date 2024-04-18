import { TOKEN_NAME } from "@/constants/token.const";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const body = await request.json();
  const { access_token, refresh_token } = body;
  const cookieStore = cookies();
  cookieStore.set(TOKEN_NAME.ACCESS_TOKEN, access_token, {
    httpOnly: true,
    path: "/",
    secure: true,
  });
  cookieStore.set(TOKEN_NAME.REFRESH_TOKEN, refresh_token, {
    httpOnly: true,
    path: "/",
    secure: true,
  });

  return Response.json(body);
}
