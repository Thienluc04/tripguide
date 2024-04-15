"use client";

import authApi from "@/api-client/auth-api";
import { ModelAuth } from "@/components/auth";
import { BaseFormLogin } from "@/components/auth/BaseFormLogin";
import { LINKS_URL } from "@/constants/link-url.const";
import { LoginSchema, LoginSchemaType } from "@/models/schemas/login.schema";
import { useCommonStore } from "@/store/common-store";
import { saveToken } from "@/utils/handle-token.util";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function SignInPage() {
  const form = useForm<LoginSchemaType>({
    mode: "onSubmit",
    resolver: zodResolver(LoginSchema),
  });

  const router = useRouter();
  const { params, setParams } = useCommonStore();

  const handleSignIn: SubmitHandler<LoginSchemaType> = async (values) => {
    try {
      const data = await authApi.login(values);
      const tokens = data.result as TokensResult;
      setParams({ ...params, tokens, currentUser: { name: "Thien Luc" } });
      toast.success(data.message);
      router.push(LINKS_URL.HOME);
    } catch (err) {
      // Loop errors response and setError with key and value
      const error = err as unknown as ErrorResponse;

      for (const [key, value] of Object.entries(error?.errors as ErrorsType)) {
        form.setError(key as keyof LoginSchemaType, {
          message: value.msg,
        });
      }
    }
  };

  return (
    <ModelAuth className="w-[466px]">
      <BaseFormLogin form={form} onFormSubmit={handleSignIn} />
    </ModelAuth>
  );
}
