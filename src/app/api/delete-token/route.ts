import { TOKEN_NAME } from "@/constants/token.const";
import { cookies } from "next/headers";

export async function DELETE() {
  const cookieStore = cookies();
  cookieStore.delete(TOKEN_NAME.ACCESS_TOKEN);
  cookieStore.delete(TOKEN_NAME.REFRESH_TOKEN);

  return Response.json({});
}
