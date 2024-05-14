"use client";

import userApi from "@/api-client/user-api";
import { PAGES } from "@/constants/pages.const";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Loading from "../loading";

export default function VerifyForgotPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    (async () => {
      const token = searchParams.get("token");
      if (token) {
        await userApi.verifyForgotPassword({
          forgot_password_token: token,
        });
        router.push(`${PAGES.RESET_PASSWORD}?token=${token}`, { scroll: true });
      } else {
        router.push(PAGES.HOME);
      }
    })();
  }, []);

  return <Loading></Loading>;
}
