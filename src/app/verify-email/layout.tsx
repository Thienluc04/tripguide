"use client";

import userApi from "@/api-client/user-api";
import { Footer } from "@/components/common";
import { PAGES } from "@/constants/pages.const";
import { useRouter, useSearchParams } from "next/navigation";
import { useLayoutEffect } from "react";
import { toast } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useSearchParams();
  const router = useRouter();

  useLayoutEffect(() => {
    if (params.get("token")) {
      userApi
        .verifyEmail({ email_verify_token: params.get("token") as string })
        .then(() => {
          router.push(PAGES.PROFILE);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } else {
      router.push(PAGES.HOME);
    }
  }, []);

  return (
    <>
      {children}
      <Footer />
    </>
  );
}
