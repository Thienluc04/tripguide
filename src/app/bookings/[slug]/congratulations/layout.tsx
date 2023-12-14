import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Congratulations 🎉',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
