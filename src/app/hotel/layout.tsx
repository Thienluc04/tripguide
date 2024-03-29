import { Footer, NavbarFilter } from "@/components/common";
import { HotelHero } from "@/components/hotel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Booking",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HotelHero>
        <NavbarFilter type="hotel" />
      </HotelHero>
      {children}
      <Footer />
    </>
  );
}
