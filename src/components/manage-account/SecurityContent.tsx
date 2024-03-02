import { DesktopIcon, MobileIcon } from "../icons";
import { Button } from "../ui";

interface SecurityContentProps {}

export function SecurityContent(props: SecurityContentProps) {
  return (
    <div className="mt-[70px]">
      <div className="mb-[50px] border-b border-grayF3 pb-[50px] dark:border-black29">
        <h2 className="mb-3 text-2xl font-medium leading-9 text-black dark:text-gray8B">
          Login
        </h2>
        <div className="flex justify-between">
          <div>
            <h3 className="mb-2 text-sm font-medium text-black dark:text-grayFD">
              Password
            </h3>
            <p className="text-xs text-gray8B">Last updated 1 month ago</p>
          </div>
          <Button
            variant={"outline"}
            className="h-[34px] w-auto rounded-full border-grayC3 px-4 py-2 text-sm font-bold text-black2F dark:border-gray8B dark:text-grayC3"
          >
            Update password
          </Button>
        </div>
      </div>
      <div className="mb-[50px] border-b border-grayF3 pb-[50px] dark:border-black29">
        <h2 className="mb-3 text-2xl font-medium leading-9 text-black dark:text-grayFD">
          Social accounts
        </h2>
        <div className="flex items-center">
          <div className="flex flex-1 items-center justify-between">
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
          <div className="mx-12 h-[60px] w-[1px] bg-grayF3 dark:bg-black29"></div>
          <div className="flex flex-1 items-center justify-between">
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
        <div className="mb-11 flex items-center justify-between border-b border-grayF3 pb-11 dark:border-black29">
          <div className="flex items-center gap-5">
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
        <div className="mb-11 flex items-center justify-between border-b border-grayF3 pb-11 dark:border-black29">
          <div className="flex items-center gap-5">
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
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
