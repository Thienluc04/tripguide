"use client";

import { PAGES } from "@/constants/pages.const";
import { LOCAL_TOKEN_NAME, TOKEN_NAME } from "@/constants/token.const";
import { useCommonStore } from "@/store/common-store";
import { getNewTokens, setLocalToken } from "@/utils/general.util";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignInWithGoogle() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { params, setParams } = useCommonStore();

  useEffect(() => {
    const refresh_token = searchParams.get(TOKEN_NAME.REFRESH_TOKEN);
    const name = searchParams.get("name");
    const avatar = searchParams.get("avatar");
    setLocalToken([
      { name: LOCAL_TOKEN_NAME.NAME_USER, value: name as string },
      { name: LOCAL_TOKEN_NAME.AVATAR, value: avatar as string },
    ]);

    getNewTokens(refresh_token as string, params, setParams);
    router.push(PAGES.HOME);
  }, []);

  return <></>;
}
