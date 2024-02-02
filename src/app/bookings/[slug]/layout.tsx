import { Footer } from "@/components/common";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Details",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer></Footer>
    </>
  );
}
