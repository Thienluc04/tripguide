import Link from "next/link";
import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { CloseIcon, FacebookIcon, GoogleIcon } from "../icons";

export interface ModelAuthProps extends ComponentProps<"div"> {
  title?: string;
}

export function ModelAuth({
  className,
  title = "Welcome Back !",
  children,
}: PropsWithChildren<ModelAuthProps>) {
  return (
    <div className="fixed inset-0 z-20">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <div
          className={twMerge(
            "relative rounded-[20px] bg-white p-[30px] dark:bg-black md:min-w-[466px] xl:px-12 xl:py-[54px]",
            className,
          )}
        >
          <Link
            href={"/"}
            className="absolute right-6 top-6 flex h-7 w-7 -translate-y-2/4 translate-x-2/4 items-center justify-center rounded-full border border-grayF3 bg-white dark:border dark:border-black44 dark:bg-black29 xl:right-0 xl:top-0 xl:h-9 xl:w-9"
          >
            <CloseIcon className="text-gray8B" />
          </Link>
          <h2 className="mb-5 text-center text-[30px] font-bold leading-10 text-black dark:text-grayFD xl:text-[40px] xl:leading-none">
            {title}
          </h2>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 flex-1 cursor-pointer items-center justify-center gap-[10px] rounded-lg bg-primary">
              <GoogleIcon />
              <span className="font-bold text-white">Sign in with Google</span>
            </div>
            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg bg-black text-white dark:bg-black29">
              <FacebookIcon />
            </div>
          </div>
          <div className="mb-5 flex items-center justify-center gap-[10px]">
            <div className="h-[1px] w-[96px] bg-grayF3 dark:bg-black44"></div>
            <span className="text-sm text-gray8B dark:text-grayC3">
              or continue with
            </span>
            <div className="h-[1px] w-[96px] bg-grayF3 dark:bg-black44"></div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
