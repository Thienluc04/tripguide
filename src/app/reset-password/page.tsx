"use client";

import authApi from "@/api-client/auth-api";
import { BaseFormResetPassword, ModelAuth } from "@/components/auth";
import { PAGES } from "@/constants/pages.const";
import {
  ResetPasswordSchema,
  ResetPasswordSchemaType,
} from "@/models/schemas/reset-password.schema";
import { wrapCheckErrorForm } from "@/utils/wrap-check-error.util";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function ForgotPasswordPage() {
  const form = useForm<ResetPasswordSchemaType>({
    mode: "onSubmit",
    resolver: zodResolver(ResetPasswordSchema),
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const [forgotPassLoading, setForgotPassLoading] = useState(false);

  const handleSignIn: SubmitHandler<ResetPasswordSchemaType> = async (
    values,
  ) => {
    setForgotPassLoading(true);
    await wrapCheckErrorForm(
      async () => {
        const token = searchParams.get("token");
        const { message } = await authApi.resetPassword({
          ...values,
          forgot_password_token: token as string,
        });
        toast.success(message);
        setForgotPassLoading(false);
        router.push(PAGES.LOGIN);
      },
      setForgotPassLoading,
      form,
    );
  };

  return (
    <ModelAuth
      title="Reset Password"
      description="Please enter new password to reset password"
      noOauth
      className="w-[466px]"
    >
      <BaseFormResetPassword
        form={form}
        onFormSubmit={handleSignIn}
        isLoading={forgotPassLoading}
      />
    </ModelAuth>
  );
}
