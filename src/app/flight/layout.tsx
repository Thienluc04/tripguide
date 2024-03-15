"use client";

import { Footer, NavbarFilter } from "@/components/common";
import { FlightHero } from "@/components/flight";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FlightHero>
        <NavbarFilter type="flight" />
      </FlightHero>
      {children}
      <Footer />
    </>
  );
}
