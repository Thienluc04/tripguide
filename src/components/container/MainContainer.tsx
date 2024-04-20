"use client";

import { Header } from "@/components/common";
import { twMerge } from "tailwind-merge";

import { ToastContainer } from "react-toastify";

import { PATH_API } from "@/constants/path-api.const";
import { useCommonStore } from "@/store/common-store";
import { getNewTokens } from "@/utils/general.util";
import { DM_Sans } from "next/font/google";
import { useEffect } from "react";

export interface MainContainerProps {
  children: React.ReactNode;
}

export const dmSans = DM_Sans({
  weight: ["700", "600", "500", "400"],
  subsets: ["latin"],
});

export function MainContainer({ children }: MainContainerProps) {
  const { params, setParams } = useCommonStore();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(PATH_API.GET_TOKEN);
      const tokens: TokensResult = await response.json();
      if (tokens.refresh_token) {
        getNewTokens(tokens.refresh_token, params, setParams);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (params.tokens?.refresh_token) {
          getNewTokens(
            params.tokens?.refresh_token as string,
            params,
            setParams,
          );
        }
      },
      1000 * 60 * 10,
    );
    return () => clearInterval(interval);
  }, [params]);

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
