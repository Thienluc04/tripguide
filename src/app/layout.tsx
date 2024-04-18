import { MainContainer } from "@/components/container";
import "react-toastify/dist/ReactToastify.css";
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainContainer>{children}</MainContainer>;
}
