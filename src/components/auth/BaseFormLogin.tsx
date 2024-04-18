import { PAGES } from "@/constants/pages.const";
import { LoginSchemaType } from "@/models/schemas/login.schema";
import Link from "next/link";
import { useEffect } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { Button } from "../ui";
import { InputField } from "./InputField";

interface BaseFormLoginProps {
  form: UseFormReturn<LoginSchemaType>;
  onFormSubmit: SubmitHandler<LoginSchemaType>;
  isLoading: boolean;
}

export function BaseFormLogin({
  form,
  onFormSubmit,
  isLoading,
}: BaseFormLoginProps) {
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
      <InputField
        name="password"
        control={control}
        label="Password"
        placeholder="Enter your password"
        type="password"
        className="mb-3"
        messageError={errors.password && String(errors?.password.message)}
      />
      <div className="mb-5 text-right">
        <Link
          href={PAGES.FORGOT_PASSWORD}
          className="text-sm font-medium text-primary"
        >
          Forgot your password?
        </Link>
      </div>
      <Button
        isLoading={isLoading}
        variant="auth"
        size="full"
        type="submit"
        className="mb-5"
      >
        Sign In
      </Button>
      <div className="flex justify-center gap-1 text-sm">
        <span className="dark:text-grayF6">Don’t have an account?</span>
        <Link href={PAGES.REGISTER} className="font-medium text-primary">
          Sign up
        </Link>
      </div>
    </form>
  );
}
