"use client";

import authApi from "@/api-client/auth-api";
import { BaseFormLogin, ModelAuth } from "@/components/auth";
import { PAGES } from "@/constants/pages.const";
import { LOCAL_TOKEN_NAME } from "@/constants/token.const";
import { LoginSchema, LoginSchemaType } from "@/models/schemas/login.schema";
import { useCommonStore } from "@/store/common-store";
import { LoginResponse } from "@/types/user";
import { setLocalToken } from "@/utils/general.util";
import { wrapCheckErrorForm } from "@/utils/wrap-check-error.util";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function SignInPage() {
  const form = useForm<LoginSchemaType>({
    mode: "onSubmit",
    resolver: zodResolver(LoginSchema),
  });

  const router = useRouter();
  const { params, setParams } = useCommonStore();
  const [loginLoading, setLoginLoading] = useState(false);

  const handleSignIn: SubmitHandler<LoginSchemaType> = async (values) => {
    setLoginLoading(true);
    await wrapCheckErrorForm(
      async () => {
        const data = await authApi.login(values);
        const { access_token, refresh_token, name, avatar } =
          data.result as LoginResponse;

        setParams({
          ...params,
          tokens: { access_token, refresh_token },
          currentUser: { name, avatar },
        });
        setLocalToken([
          { name: LOCAL_TOKEN_NAME.NAME_USER, value: name },
          { name: LOCAL_TOKEN_NAME.AVATAR, value: avatar },
        ]);
        setLoginLoading(false);
        toast.success(data.message);
        router.push(PAGES.HOTEL);
      },
      setLoginLoading,
      form,
    );
  };

  return (
    <ModelAuth className="w-[466px]">
      <BaseFormLogin
        form={form}
        onFormSubmit={handleSignIn}
        isLoading={loginLoading}
      />
    </ModelAuth>
  );
}
