import Link from 'next/link';
import { ComponentProps, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { CloseIcon, FacebookIcon, GoogleIcon } from '../icons';

export interface ModelAuthProps extends ComponentProps<'div'> {
  title?: string;
}

export function ModelAuth({
  className,
  title = 'Welcome Back !',
  children,
}: PropsWithChildren<ModelAuthProps>) {
  return (
    <div className="fixed inset-0 z-20">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div
          className={twMerge(
            'relative min-w-[466px] bg-white rounded-[20px] py-[54px] px-12',
            className
          )}
        >
          <Link
            href={'/'}
            className="absolute top-0 right-0 translate-x-2/4 -translate-y-2/4"
          >
            <CloseIcon></CloseIcon>
          </Link>
          <h2 className="text-[40px] font-bold text-black text-center mb-5">
            {title}
          </h2>
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center gap-[10px] bg-primary rounded-lg h-12 flex-1 cursor-pointer">
              <GoogleIcon></GoogleIcon>
              <span className="font-bold text-white">Sign in with Google</span>
            </div>
            <div className="rounded-lg text-white w-12 h-12 flex items-center justify-center bg-black cursor-pointer">
              <FacebookIcon></FacebookIcon>
            </div>
          </div>
          <div className="flex gap-[10px] items-center justify-center mb-5">
            <div className="w-[96px] h-[1px] bg-grayF3"></div>
            <span className="text-gray8B text-sm">or continue with</span>
            <div className="w-[96px] h-[1px] bg-grayF3"></div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
