"use client";

import { Header } from "@/components/common";
import { twMerge } from "tailwind-merge";

import { ToastContainer } from "react-toastify";

import authApi from "@/api-client/auth-api";
import axiosClient from "@/api-client/axios-client";
import { PATH_API } from "@/constants/path-api.const";
import { useCommonStore } from "@/store/common-store";
import { DM_Sans } from "next/font/google";
import { useCallback, useEffect } from "react";
import { getLocalToken } from "@/utils/general.util";
import { LOCAL_TOKEN_NAME } from "@/constants/token.const";

export interface MainContainerProps {
  children: React.ReactNode;
}

export const dmSans = DM_Sans({
  weight: ["700", "600", "500", "400"],
  subsets: ["latin"],
});

export function MainContainer({ children }: MainContainerProps) {
  const { params, setParams } = useCommonStore();

  const getNewTokens = useCallback(async (refresh_token: string) => {
    const data = await authApi.refreshToken({ refresh_token });
    try {
      if (data.result?.access_token) {
        await fetch(PATH_API.SET_TOKEN, {
          method: "post",
          body: JSON.stringify({ ...data.result }),
        });
        const name = getLocalToken(LOCAL_TOKEN_NAME.NAME_USER);
        const avatar = getLocalToken(LOCAL_TOKEN_NAME.AVATAR);
        setParams({
          ...params,
          tokens: data.result,
          currentUser: { name, avatar },
        });
      }
    } catch (error) {
      const tokens = params.tokens as TokensResult;
      await authApi.logout({ ...tokens });
      setParams({ theme: params.theme });
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(PATH_API.GET_TOKEN);
      const tokens: TokensResult = await response.json();
      if (tokens.refresh_token) {
        getNewTokens(tokens.refresh_token);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (params.tokens?.refresh_token) {
          getNewTokens(params.tokens?.refresh_token as string);
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
