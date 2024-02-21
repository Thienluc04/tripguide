import { Footer } from "@/components/common";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel List",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-grayFB dark:bg-black">
      {children}
      <Footer />
    </div>
  );
}
