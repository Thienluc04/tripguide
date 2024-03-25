import { PencilIcon, PencilWriteIcon, TickIcon } from "@/components/icons";

import avatar from "@images/profile/avatar.png";
import Image from "next/image";

interface ProfileSidebarProps {}

export function ProfileSidebar(props: ProfileSidebarProps) {
  return (
    <div className="flex w-full flex-col items-center rounded-[10px] border-2 border-grayF6 bg-white px-5 py-[30px] dark:border-black44 dark:bg-black29 xl:w-[350px] xl:px-7 xl:py-8">
      <div className="relative mx-auto mb-3 inline-block text-center">
        <Image
          src={avatar}
          alt="avatar-profile"
          width={170}
          height={170}
          className="mx-auto text-center"
        />
        <div className="absolute bottom-0 right-0 flex h-11 w-11 items-center justify-center rounded-full border border-grayF3 bg-grayF6 dark:border-black44 dark:bg-black29">
          <PencilIcon className="text-gray91 dark:text-grayF3" />
        </div>
      </div>
      <h2 className="mb-5 text-[34px] font-bold leading-[44px] text-black2F dark:text-grayF3">
        Jonathan Due
      </h2>
      <div className="mb-6 flex items-center gap-3 rounded-3xl bg-grayF6 px-7 py-2 text-gray90 dark:bg-black44 dark:text-grayC3">
        <TickIcon />
        <span className="text-sm leading-6">Indentity verified</span>
      </div>
      <div className="mb-7 h-[2px] w-full bg-grayF7 dark:bg-black44"></div>
      <div className="mb-9 w-full">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-medium leading-6 dark:text-grayF6">From</p>
          <p className="text-sm font-medium leading-6 text-gray8B">
            United State
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium leading-6 dark:text-grayF6">
            Member Since
          </p>
          <p className="text-sm font-medium leading-6 text-gray8B">
            05.06.1996
          </p>
        </div>
      </div>
      <div className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-3xl bg-blueFF py-[6px] text-white">
        <span className="text-sm font-medium leading-6">Edit My Data</span>
        <PencilWriteIcon className="text-grayFD" />
      </div>
    </div>
  );
}
