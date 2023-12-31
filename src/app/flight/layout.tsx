import { Footer, NavbarFilter } from '@/components/common';
import { FlightHero } from '@/components/flight';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flight Booking',
  description: 'Generated by create next app',
};

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
