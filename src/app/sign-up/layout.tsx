import { HotelHero } from "@/components/hotel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HotelHero></HotelHero>
      {children}
    </>
  );
}
