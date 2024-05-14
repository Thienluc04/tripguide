import { useState } from "react";
import { DesktopIcon, MobileIcon } from "../icons";
import { Button } from "../ui";
import { ChangePassword } from "./ChangePassword";

interface SecurityContentProps {}

export function SecurityContent(props: SecurityContentProps) {
  const [changePassword, setChangePassword] = useState(false);

  return (
    <div className="xl:mt-[70px]">
      <div className="mb-7 border-b border-grayF3 pb-6 dark:border-black29 xl:mb-[50px] xl:pb-[50px]">
        <h2 className="mb-3 text-2xl font-medium leading-9 text-black dark:text-gray8B">
          Login
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="mb-2 text-sm font-medium text-black dark:text-grayFD">
              Password
            </h3>
          </div>
          <Button
            variant={"outline"}
            className="h-[34px] w-auto rounded-full border-grayC3 px-4 py-2 text-sm font-bold text-black2F dark:border-gray8B dark:text-grayC3"
            disabled={changePassword}
            onClick={() => setChangePassword(true)}
          >
            Change password
          </Button>
        </div>
        {changePassword && (
          <ChangePassword onCancel={() => setChangePassword(false)} />
        )}
      </div>
      <div className="mb-10 border-b border-grayF3 pb-10 dark:border-black29 xl:mb-[50px] xl:pb-[50px]">
        <h2 className="mb-3 text-2xl font-medium leading-9 text-black dark:text-grayFD">
          Social accounts
        </h2>
        <div className="flex flex-col items-center gap-10 xl:flex-row xl:gap-0">
          <div className="flex w-full flex-1 items-center justify-between">
            <div>
              <h3 className="mb-2 text-sm font-medium text-black dark:text-grayFD">
                Facebook
              </h3>
              <p className="text-xs text-gray8B">Not connected</p>
            </div>
            <Button
              variant={"outline"}
              className="h-auto w-auto rounded-full border-grayF3 px-6 py-[6px] text-sm font-bold text-black2F dark:border-gray8B dark:text-grayC3"
            >
              Connect
            </Button>
          </div>
          <div className="mx-12 hidden h-[60px] w-[1px] bg-grayF3 dark:bg-black29 xl:block"></div>
          <div className="flex w-full flex-1 items-center justify-between">
            <div>
              <h3 className="mb-2 text-sm font-medium leading-5 dark:text-grayFD">
                Apple account
              </h3>
              <p className="text-xs text-gray8B">Not connected</p>
            </div>
            <Button
              variant={"outline"}
              className="h-auto w-auto rounded-full border-grayF3 px-6 py-[6px] text-sm font-bold text-black2F dark:border-gray8B dark:text-grayC3"
            >
              Connect
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-8 text-2xl font-medium leading-9 text-black dark:text-grayFD">
          Device history
        </h2>
        <div className="mb-10 flex flex-col  items-center justify-between gap-7 border-b border-grayF3 pb-10 dark:border-black29 md:flex-row xl:mb-11 xl:gap-0 xl:pb-11">
          <div className="flex w-full items-center gap-5 md:w-auto">
            <DesktopIcon className="dark:border-grayC3" />
            <div>
              <p className="mb-1 text-xs text-gray8B dark:text-grayC3">
                May 14, 2021 at 08:36pm
              </p>
              <h3 className="text-sm font-bold text-black00 dark:text-grayF6">
                Windows 10 Chrome
              </h3>
            </div>
          </div>
          <Button
            variant={"outline"}
            className="h-auto w-auto rounded-full border-grayF3 px-5 py-2 text-sm font-bold text-black2F dark:border-gray8B dark:text-grayC3"
          >
            Log out device
          </Button>
        </div>
        <div className="mb-10 flex flex-col  items-center justify-between gap-7 border-b border-grayF3 pb-10 dark:border-black29 md:flex-row xl:mb-11 xl:gap-0 xl:pb-11">
          <div className="flex w-full items-center gap-5 md:w-auto">
            <DesktopIcon className="dark:border-grayC3" />
            <div>
              <p className="mb-1 text-xs text-gray8B dark:text-grayC3">
                May 14, 2021 at 08:36pm
              </p>
              <h3 className="text-sm font-bold text-black00 dark:text-grayF6">
                Windows 10 Mozilla Firefox
              </h3>
            </div>
          </div>
          <Button
            variant={"outline"}
            className="h-auto w-auto rounded-full border-grayF3 px-5 py-2 text-sm font-bold text-black2F dark:border-gray8B dark:text-grayC3"
          >
            Log out device
          </Button>
        </div>
        <div className="flex flex-col items-center justify-between gap-7 md:flex-row xl:gap-0">
          <div className="flex w-full items-center gap-5 md:w-auto">
            <MobileIcon className="dark:border-grayC3" />
            <div>
              <p className="mb-1 text-xs text-gray8B dark:text-grayC3">
                May 14, 2021 at 08:36pm
              </p>
              <h3 className="text-sm font-bold text-black00 dark:text-grayF6">
                Android 10 Chrome
              </h3>
            </div>
          </div>
          <Button
            variant={"outline"}
            className="h-auto w-auto rounded-full border-grayF3 px-5 py-2 text-sm font-bold text-black2F dark:border-gray8B dark:text-grayC3"
          >
            Log out device
          </Button>
        </div>
      </div>
    </div>
  );
}
