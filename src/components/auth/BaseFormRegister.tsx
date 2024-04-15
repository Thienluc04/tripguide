import { cn } from "@/lib/utils";
import { RegisterSchemaType } from "@/models/schemas/register.schema";
import Link from "next/link";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { Button } from "../ui";
import { InputField } from "./InputField";

export interface BaseFormRegisterProps {
  form: UseFormReturn<RegisterSchemaType>;
  onFormSubmit: SubmitHandler<RegisterSchemaType>;
}

export function BaseFormRegister({
  form,
  onFormSubmit,
}: BaseFormRegisterProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form autoComplete="false" onSubmit={handleSubmit(onFormSubmit)}>
      <InputField
        name="name"
        control={control}
        label="Name"
        placeholder="Enter your name"
        className={cn(errors.name ? "mb-5" : "mb-5")}
        messageError={errors.name && String(errors?.name.message)}
      />
      <InputField
        name="email"
        control={control}
        label="Email"
        type="email"
        placeholder="Enter your Email"
        className={cn(errors.email ? "mb-2" : "mb-5")}
        messageError={errors.email && String(errors?.email.message)}
      />
      <InputField
        name="password"
        control={control}
        label="Password"
        type="password"
        placeholder="Enter your password"
        className={cn(errors.password ? "mb-2" : "mb-5")}
        messageError={errors.password && String(errors?.password.message)}
      />
      <InputField
        name="confirm_password"
        control={control}
        label="Confirm password"
        type="password"
        placeholder="Enter your confirm password"
        className={cn("mb-5")}
        messageError={
          errors.confirm_password && String(errors?.confirm_password.message)
        }
      />
      <div className="mb-5">
        <Button variant="auth" size="full" type="submit">
          Sign up
        </Button>
      </div>
      <div className="flex justify-center gap-1 text-sm">
        <span className="dark:text-grayC3">Already have an account?</span>
        <Link href={"/sign-in"} className="font-medium text-primary">
          Sign in
        </Link>
      </div>
    </form>
  );
}
