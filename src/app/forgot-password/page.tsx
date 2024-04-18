"use client";

import authApi from "@/api-client/auth-api";
import { BaseFormForgotPassword, ModelAuth } from "@/components/auth";
import { PAGES } from "@/constants/pages.const";
import {
  ForgotPasswordSchema,
  ForgotPasswordSchemaType,
} from "@/models/schemas/forgot-password.schema";
import { wrapCheckErrorForm } from "@/utils/wrap-check-error.util";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function ForgotPasswordPage() {
  const form = useForm<ForgotPasswordSchemaType>({
    mode: "onSubmit",
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const router = useRouter();
  const [forgotPassLoading, setForgotPassLoading] = useState(false);

  const handleSignIn: SubmitHandler<ForgotPasswordSchemaType> = async (
    values,
  ) => {
    setForgotPassLoading(true);
    await wrapCheckErrorForm(
      async () => {
        const { message } = await authApi.forgotPassword(values);
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
      title="Forgot Password"
      description="Enter your email to reset your password"
      noOauth
      className="w-[466px]"
    >
      <BaseFormForgotPassword
        form={form}
        onFormSubmit={handleSignIn}
        isLoading={forgotPassLoading}
      />
    </ModelAuth>
  );
}
