"use client";

import { Header } from "@/components/common";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCommonStore } from "@/store/commonStore";

export const dmSans = DM_Sans({
  weight: ["700", "600", "500", "400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { params } = useCommonStore();

  return (
    <html lang="en">
      <body
        className={twMerge(
          dmSans.className,
          "bg-grayAFB text-black44 dark:bg-black",
          params.theme === "dark" && "dark",
        )}
      >
        <ToastContainer />
        <Header />
        {children}
      </body>
    </html>
  );
}
