import { TOKEN_NAME } from "@/constants/token.const";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const access_token = cookieStore.get(TOKEN_NAME.ACCESS_TOKEN)?.value;
  const refresh_token = cookieStore.get(TOKEN_NAME.REFRESH_TOKEN)?.value;

  return Response.json({
    access_token,
    refresh_token,
  });
}
