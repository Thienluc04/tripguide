import { DesktopIcon, MobileIcon } from "../icons";
import { Button } from "../ui";

interface SecurityContentProps {}

export function SecurityContent(props: SecurityContentProps) {
  return (
    <>
      <div className="mb-[50px] border-b border-grayF3 pb-[50px]">
        <h2 className="mb-3 text-2xl font-medium leading-9 text-black">
          Login
        </h2>
        <div className="flex justify-between">
          <div>
            <h3 className="mb-2 text-sm font-medium text-black">Password</h3>
            <p className="text-xs text-gray8B">Last updated 1 month ago</p>
          </div>
          <Button
            variant={"outline"}
            className="h-auto w-auto rounded-full border-grayC3 px-4 py-2 text-sm font-bold text-black2F"
          >
            Update password
          </Button>
        </div>
      </div>
      <div className="mb-[50px] border-b border-grayF3 pb-[50px]">
        <h2 className="mb-3 text-2xl font-medium leading-9 text-black">
          Social accounts
        </h2>
        <div className="flex items-center">
          <div className="flex flex-1 items-center justify-between">
            <div>
              <h3 className="mb-2 text-sm font-medium text-black">Facebook</h3>
              <p className="text-xs text-gray8B">Not connected</p>
            </div>
            <Button
              variant={"outline"}
              className="h-auto w-auto rounded-full border-grayF3 px-6 py-[6px] text-sm font-bold text-black2F"
            >
              Connect
            </Button>
          </div>
          <div className="mx-12 h-[60px] w-[1px] bg-grayF3"></div>
          <div className="flex flex-1 items-center justify-between">
            <div>
              <h3 className="mb-2 text-sm font-medium leading-5">
                Apple account
              </h3>
              <p className="text-xs text-gray8B">Not connected</p>
            </div>
            <Button
              variant={"outline"}
              className="h-auto w-auto rounded-full border-grayF3 px-6 py-[6px] text-sm font-bold text-black2F"
            >
              Connect
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-8 text-2xl font-medium leading-9 text-black">
          Device history
        </h2>
        <div className="mb-11 flex items-center justify-between border-b border-grayF3 pb-11">
          <div className="flex items-center gap-5">
            <DesktopIcon />
            <div>
              <p className="mb-1 text-xs text-gray8B">
                May 14, 2021 at 08:36pm
              </p>
              <h3 className="text-black00 text-sm font-bold">
                Windows 10 Chrome
              </h3>
            </div>
          </div>
          <Button
            variant={"outline"}
            className="h-auto w-auto rounded-full border-grayF3 px-5 py-2 text-sm font-bold text-black2F"
          >
            Log out device
          </Button>
        </div>
        <div className="mb-11 flex items-center justify-between border-b border-grayF3 pb-11">
          <div className="flex items-center gap-5">
            <DesktopIcon />
            <div>
              <p className="mb-1 text-xs text-gray8B">
                May 14, 2021 at 08:36pm
              </p>
              <h3 className="text-black00 text-sm font-bold">
                Windows 10 Mozilla Firefox
              </h3>
            </div>
          </div>
          <Button
            variant={"outline"}
            className="h-auto w-auto rounded-full border-grayF3 px-5 py-2 text-sm font-bold text-black2F"
          >
            Log out device
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <MobileIcon />
            <div>
              <p className="mb-1 text-xs text-gray8B">
                May 14, 2021 at 08:36pm
              </p>
              <h3 className="text-black00 text-sm font-bold">
                Android 10 Chrome
              </h3>
            </div>
          </div>
          <Button
            variant={"outline"}
            className="h-auto w-auto rounded-full border-grayF3 px-5 py-2 text-sm font-bold text-black2F"
          >
            Log out device
          </Button>
        </div>
      </div>
    </>
  );
}
