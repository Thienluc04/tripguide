import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { InputField } from "./InputField";
import { PAGES } from "@/constants/link-url.const";
import { Button } from "../ui";
import Link from "next/link";
import { useEffect } from "react";
import { ForgotPasswordSchemaType } from "@/models/schemas/forgot-password.schema";

interface BaseFormForgotPasswordProps {
  form: UseFormReturn<ForgotPasswordSchemaType>;
  onFormSubmit: SubmitHandler<ForgotPasswordSchemaType>;
  isLoading: boolean;
}

export function BaseFormForgotPassword({
  form,
  onFormSubmit,
  isLoading,
}: BaseFormForgotPasswordProps) {
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = form;

  useEffect(() => {
    setFocus("email");
  }, []);

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <InputField
        name="email"
        control={control}
        label="Email address"
        placeholder="Enter your email"
        type="email"
        className="mb-5"
        messageError={errors.email && String(errors?.email.message)}
      />
      <Button isLoading={isLoading} variant="auth" size="full" type="submit">
        Send Email
      </Button>
    </form>
  );
}
