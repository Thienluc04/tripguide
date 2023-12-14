import { Footer } from '@/components/common';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flight List',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
