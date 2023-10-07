import { InputField, ModelAuth } from '@/components/auth';
import { Button } from '@/components/button';
import { Checkbox } from '@/components/input';
import Link from 'next/link';

interface ISignUpPageProps {}

export default function SignUpPage(props: ISignUpPageProps) {
  return (
    <ModelAuth title="Let’s go" className="w-[520px]">
      <form>
        <div className="flex gap-[14px] mb-5">
          <InputField
            label="First name"
            placeholder="First name"
            className="flex-1 w-full"
          ></InputField>
          <InputField
            label="Last name"
            placeholder="Last name"
            className="flex-1 w-full"
          ></InputField>
        </div>
        <InputField
          label="Email"
          type="email"
          placeholder="Enter your Email"
          className="mb-5"
        ></InputField>
        <InputField
          label="Password"
          type="password"
          placeholder="Enter your password"
          className="mb-5"
        ></InputField>
        <div className="flex gap-[14px] mb-5">
          <span className="pt-2">
            <Checkbox></Checkbox>
          </span>
          <p className="max-w-[262px] text-sm">
            I’ve read and accepted{' '}
            <span className="text-primary">
              Terms of Service and Privacy Policy
            </span>
          </p>
        </div>
        <div className="mb-5">
          <Button type="submit">Sign up</Button>
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
