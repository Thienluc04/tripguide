"use client";

import authApi from "@/api-client/auth-api";
import { BaseFormRegister, ModelAuth } from "@/components/auth";
import { PAGES } from "@/constants/pages.const";
import {
  RegisterSchema,
  RegisterSchemaType,
} from "@/models/schemas/register.schema";
import { wrapCheckErrorForm } from "@/utils/wrap-check-error.util";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function SignUpPage() {
  const form = useForm<RegisterSchemaType>({
    mode: "onSubmit",
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      terms: false,
    },
  });

  const router = useRouter();
  const [registerLoading, setRegisterLoading] = useState(false);

  const handleSignUp: SubmitHandler<RegisterSchemaType> = async (values) => {
    setRegisterLoading(true);

    await wrapCheckErrorForm(
      async () => {
        const data = await authApi.register(values);
        setRegisterLoading(false);
        toast.success(data.message);
        router.push(PAGES.LOGIN);
      },
      setRegisterLoading,
      form,
    );
  };

  return (
    <ModelAuth title="Let’s go" className="w-[520px] xl:mt-[88px]">
      <BaseFormRegister
        isLoading={registerLoading}
        form={form}
        onFormSubmit={handleSignUp}
      />
    </ModelAuth>
  );
}
