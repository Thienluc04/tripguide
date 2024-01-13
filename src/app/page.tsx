import { NavbarFilter } from "@/components/common";
import { HotelHero } from "@/components/hotel";

export default function Home() {
  return (
    <main className="pb-[300px]">
      <HotelHero>
        <NavbarFilter type="hotel" />
      </HotelHero>
    </main>
  );
}
