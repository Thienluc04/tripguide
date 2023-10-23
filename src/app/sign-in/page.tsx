'use client';

import { InputField, ModelAuth } from '@/components/auth';
import { Button } from '@/components/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const SignInSchema = z.object({
  email: z.string().email('This email is invalid'),
  password: z.string().min(8, 'Password must have at least 8 characters'),
});

type SignInSchemaType = z.infer<typeof SignInSchema>;

export default function SignInPage() {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<SignInSchemaType>({
    mode: 'onSubmit',
    resolver: zodResolver(SignInSchema),
  });

  const handleSignIn: SubmitHandler<FieldValues> = (values) => {
    if (!isValid) return;
    console.log(values);
  };

  return (
    <ModelAuth>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <InputField
          name="email"
          control={control}
          label="Email address"
          placeholder="Enter your email"
          type="email"
          className="mb-5"
          messageError={errors.email && String(errors?.email.message)}
        ></InputField>
        <InputField
          name="password"
          control={control}
          label="Password"
          placeholder="Enter your password"
          type="password"
          className="mb-3"
          messageError={errors.password && String(errors?.password.message)}
        ></InputField>
        <div className="text-right mb-5">
          <Link
            href={'/pass-recovery'}
            className="text-sm font-medium text-primary"
          >
            Forgot your password?
          </Link>
        </div>
        <Button variant="auth" size="full" type="submit" className="mb-5">
          Sign In
        </Button>
        <div className="flex text-sm gap-1 justify-center">
          <span>Don’t have an account?</span>
          <Link href={'/sign-up'} className="text-primary font-medium">
            Sign up
          </Link>
        </div>
      </form>
    </ModelAuth>
  );
}
