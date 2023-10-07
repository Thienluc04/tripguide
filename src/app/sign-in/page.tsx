import { InputField, ModelAuth } from '@/components/auth';
import { Button } from '@/components/button';
import Link from 'next/link';

interface SignInPageProps {}

export default function SignInPage(props: SignInPageProps) {
  return (
    <ModelAuth>
      <form>
        <InputField
          label="Email address"
          placeholder="Enter your email"
          type="email"
          className="mb-5"
        ></InputField>
        <InputField
          label="Password"
          placeholder="Enter your password"
          type="password"
          className="mb-3"
        ></InputField>
        <div className="text-right mb-5">
          <Link
            href={'/pass-recovery'}
            className="text-sm font-medium text-primary"
          >
            Forgot your password?
          </Link>
        </div>
        <Button type="submit" className="mb-5">
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
