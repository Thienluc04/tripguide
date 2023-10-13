import { NavbarFilter } from '@/components/common';
import { HotelHero } from '@/components/hotel';

export default function Home() {
  return (
    <main>
      <HotelHero>
        <NavbarFilter />
      </HotelHero>
    </main>
  );
}
