import { MainContainer } from "@/components/container";
import "react-toastify/dist/ReactToastify.css";
import "./globals.scss";
import { cookies } from "next/headers";
import { TOKENS_NAME } from "@/constants/token.const";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const access_token = cookieStore.get(TOKENS_NAME.ACCESS_TOKEN)
    ?.value as string;
  const refresh_token = cookieStore.get(TOKENS_NAME.REFRESH_TOKEN)
    ?.value as string;

  return (
    <MainContainer tokens={{ access_token, refresh_token }}>
      {children}
    </MainContainer>
  );
}
