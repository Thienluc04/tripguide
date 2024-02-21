import { NavbarFilter } from "@/components/common";
import { HotelHero } from "@/components/hotel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trip Guide",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main className="pb-[300px] dark:bg-black">
      <HotelHero>
        <NavbarFilter type="hotel" />
      </HotelHero>
    </main>
  );
}
