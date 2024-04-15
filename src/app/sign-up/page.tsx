"use client";

import authApi from "@/api-client/auth-api";
import { ModelAuth } from "@/components/auth";
import { BaseFormRegister } from "@/components/auth/BaseFormRegister";
import { LINKS_URL } from "@/constants/link-url.const";
import {
  RegisterSchema,
  RegisterSchemaType,
} from "@/models/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
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

  const handleSignUp: SubmitHandler<RegisterSchemaType> = async (values) => {
    try {
      const data = await authApi.register(values);
      toast.success(data.message);
      router.push(LINKS_URL.LOGIN);
    } catch (err) {
      // Loop errors response and setError with key and value
      const error = err as unknown as ErrorResponse;
      for (const [key, value] of Object.entries(error?.errors as ErrorsType)) {
        form.setError(key as keyof RegisterSchemaType, {
          message: value.msg,
        });
      }
    }
  };

  return (
    <ModelAuth title="Let’s go" className="w-[520px] xl:mt-[88px]">
      <BaseFormRegister form={form} onFormSubmit={handleSignUp} />
    </ModelAuth>
  );
}
