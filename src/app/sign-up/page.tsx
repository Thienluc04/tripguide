'use client';

import { InputField, ModelAuth } from '@/components/auth';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui';
import Link from 'next/link';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const SignUpSchema = z.object({
  firstName: z.string().min(1, 'This field is required'),
  lastName: z.string().min(1, 'This field is required'),
  email: z.string().email('This email is invalid'),
  password: z.string().min(8, 'Password must have at least 8 characters'),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export default function SignUpPage() {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<SignUpSchemaType>({
    mode: 'onSubmit',
    resolver: zodResolver(SignUpSchema),
  });

  const handleSignUp: SubmitHandler<FieldValues> = (values) => {
    if (!isValid) return;
    console.log(values);
  };

  return (
    <ModelAuth title="Let’s go" className="w-[520px]">
      <form autoComplete="false" onSubmit={handleSubmit(handleSignUp)}>
        <div className="flex gap-[14px] mb-5">
          <InputField
            name="firstName"
            control={control}
            label="First name"
            placeholder="First name"
            className="flex-1 w-full"
            messageError={errors.firstName && String(errors?.firstName.message)}
          ></InputField>
          <InputField
            name="lastName"
            control={control}
            label="Last name"
            placeholder="Last name"
            className="flex-1 w-full"
            messageError={errors.lastName && String(errors?.lastName.message)}
          ></InputField>
        </div>
        <InputField
          name="email"
          control={control}
          label="Email"
          type="email"
          placeholder="Enter your Email"
          className="mb-5"
          messageError={errors.email && String(errors?.email.message)}
        ></InputField>
        <InputField
          name="password"
          control={control}
          label="Password"
          type="password"
          placeholder="Enter your password"
          className="mb-5"
          messageError={errors.password && String(errors?.password.message)}
        ></InputField>
        <div className="flex gap-[14px] mb-5">
          <span className="pt-2">
            <Checkbox />
          </span>
          <p className="max-w-[262px] text-sm">
            I’ve read and accepted{' '}
            <span className="text-primary">
              Terms of Service and Privacy Policy
            </span>
          </p>
        </div>
        <div className="mb-5">
          <Button variant="auth" size="full" type="submit">
            Sign up
          </Button>
        </div>
        <div className="flex text-sm gap-1 justify-center">
          <span>Already have an account?</span>
          <Link href={'/sign-in'} className="text-primary font-medium">
            Sign in
          </Link>
        </div>
      </form>
    </ModelAuth>
  );
}
