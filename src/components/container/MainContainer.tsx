"use client";

import { Header } from "@/components/common";
import { twMerge } from "tailwind-merge";

import { ToastContainer } from "react-toastify";

import { useCommonStore } from "@/store/common-store";
import { DM_Sans } from "next/font/google";
import { useEffect } from "react";

export interface MainContainerProps {
  children: React.ReactNode;
  tokens: TokensResult;
}

export const dmSans = DM_Sans({
  weight: ["700", "600", "500", "400"],
  subsets: ["latin"],
});

export function MainContainer({ children, tokens }: MainContainerProps) {
  const { params, setParams } = useCommonStore();

  useEffect(() => {
    if (tokens.access_token.length > 0 && tokens.refresh_token.length > 0) {
      setParams({
        ...params,
        tokens,
        currentUser: {},
      });
    }
  }, [tokens]);

  return (
    <html lang="en">
      <body
        className={twMerge(
          dmSans.className,
          params.theme === "dark" ? "dark" : "light",
          "flex min-h-screen flex-col",
        )}
      >
        <ToastContainer />
        <Header />
        <div className="flex h-full flex-1 flex-col bg-grayAFB text-black44 dark:bg-black">
          {children}
        </div>
      </body>
    </html>
  );
}
