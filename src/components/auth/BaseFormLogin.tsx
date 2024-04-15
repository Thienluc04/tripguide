import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { InputField } from "./InputField";
import { LINKS_URL } from "@/constants/link-url.const";
import { Button } from "../ui";
import { LoginSchemaType } from "@/models/schemas/login.schema";
import Link from "next/link";

interface BaseFormLoginProps {
  form: UseFormReturn<LoginSchemaType>;
  onFormSubmit: SubmitHandler<LoginSchemaType>;
}

export function BaseFormLogin({ form, onFormSubmit }: BaseFormLoginProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

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
          href={LINKS_URL.FORGOT_PASSWORD}
          className="text-sm font-medium text-primary"
        >
          Forgot your password?
        </Link>
      </div>
      <Button variant="auth" size="full" type="submit" className="mb-5">
        Sign In
      </Button>
      <div className="flex justify-center gap-1 text-sm">
        <span className="dark:text-grayF6">Don’t have an account?</span>
        <Link href={LINKS_URL.REGISTER} className="font-medium text-primary">
          Sign up
        </Link>
      </div>
    </form>
  );
}
