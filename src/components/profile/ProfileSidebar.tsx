import { TickIcon } from "@/components/icons";
import { UserStatus } from "@/constants/enum.const";

import userApi from "@/api-client/user-api";
import { cn } from "@/lib/utils";
import { useCommonStore } from "@/store/common-store";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { UploadImage } from "../common";
import { Button } from "../ui";

interface ProfileSidebarProps {
  avatar?: string;
  name?: string;
  status?: UserStatus;
  from?: string;
  memberSince?: string;
}

export function ProfileSidebar({
  avatar,
  name,
  status,
  from,
  memberSince,
}: ProfileSidebarProps) {
  const { params } = useCommonStore();
  const [verifyEmail, setVerifyEmail] = useState(false);

  const statusTitle = useMemo(() => {
    const result =
      status === UserStatus.Verified
        ? "Your account is verified"
        : status === UserStatus.Unverified
          ? "Verify your email"
          : status === UserStatus.Banned
            ? "Your account is banned"
            : "";
    return result;
  }, [status]);

  const handleVerifyEmail = async () => {
    if (status === UserStatus.Unverified && !verifyEmail) {
      const access_token = params.tokens?.access_token;
      const result = await userApi.resendVerifyEmail(access_token as string);
      toast.success(result.message);
      setVerifyEmail(true);
    }
  };

  return (
    <div className="flex w-full flex-col items-center rounded-[10px] border-2 border-grayF6 bg-white px-5 py-[30px] dark:border-black44 dark:bg-black29 xl:w-[350px] xl:px-7 xl:py-8">
      <UploadImage avatar={avatar} />
      <h2 className="mb-5 text-[34px] font-bold leading-[44px] text-black2F dark:text-grayF3">
        {name}
      </h2>
      <Button
        variant={"link"}
        className={cn(
          "mb-6 flex h-auto w-auto cursor-default items-center gap-3 rounded-3xl bg-grayF6 px-7 py-2 text-gray90 hover:no-underline dark:bg-black44 dark:text-grayC3",
          status === UserStatus.Unverified &&
            !verifyEmail &&
            "cursor-pointer bg-primary text-grayFD dark:bg-primary dark:text-grayFD",
        )}
        onClick={handleVerifyEmail}
      >
        {status === UserStatus.Verified && <TickIcon />}
        <span className="text-sm leading-6">{statusTitle}</span>
      </Button>
      <div className="mb-7 h-[2px] w-full bg-grayF7 dark:bg-black44"></div>
      <div className="w-full">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-medium leading-6 dark:text-grayF6">From</p>
          <p className="text-sm font-medium leading-6 text-gray8B">{from}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium leading-6 dark:text-grayF6">
            Member Since
          </p>
          <p className="text-sm font-medium leading-6 text-gray8B">
            {new Date(memberSince as string).toISOString().substring(0, 10)}
          </p>
        </div>
      </div>
    </div>
  );
}
