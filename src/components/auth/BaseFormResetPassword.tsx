import { useEffect } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { Button } from "../ui";
import { InputField } from "./InputField";
import { ResetPasswordSchemaType } from "@/models/schemas/reset-password.schema";
import { cn } from "@/lib/utils";

interface BaseFormResetPasswordProps {
  form: UseFormReturn<ResetPasswordSchemaType>;
  onFormSubmit: SubmitHandler<ResetPasswordSchemaType>;
  isLoading: boolean;
}

export function BaseFormResetPassword({
  form,
  onFormSubmit,
  isLoading,
}: BaseFormResetPasswordProps) {
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = form;

  useEffect(() => {
    setFocus("password");
  }, []);

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
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
      <Button isLoading={isLoading} variant="auth" size="full" type="submit">
        Reset password
      </Button>
    </form>
  );
}
