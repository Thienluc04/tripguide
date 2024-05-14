import authApi from "@/api-client/auth-api";
import { PAGES } from "@/constants/pages.const";
import { listOptions } from "@/constants/header.const";
import { useCommonStore } from "@/store/common-store";
import avatarDefault from "@images/avatar-default.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { ArrowDownIcon, UserIcon } from "../icons";
import { Command, Popover, PopoverContent, PopoverTrigger } from "../ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown";
import { LOCAL_TOKEN_NAME } from "@/constants/token.const";
import { removeLocalToken } from "@/utils/general.util";

interface CurrentUserHeaderProps {}

export function CurrentUserHeader(props: CurrentUserHeaderProps) {
  const { params, setParams } = useCommonStore();
  const router = useRouter();

  const handleClickOption = async (item: OptionHeader) => {
    if (item.href) {
      router.push(item.href);
    } else {
      try {
        const tokens = params.tokens as TokensResult;
        await authApi.logout({ ...tokens });
        setParams({ theme: params.theme });
        removeLocalToken([LOCAL_TOKEN_NAME.AVATAR, LOCAL_TOKEN_NAME.NAME_USER]);
        router.push(PAGES.HOME);
      } catch (err) {
        setParams({ theme: params.theme });
        const error = err as unknown as ErrorResponse;
        toast.error(error.message);
      }
    }
  };

  return (
    <>
      {!params.currentUser && (
        <Link href={PAGES.LOGIN}>
          <UserIcon
            className="flex cursor-pointer items-center justify-center rounded-full bg-grayF3 p-[6px] text-grayC3 dark:bg-black44"
            height={28}
            width={28}
          />
        </Link>
      )}

      {/* User logged */}
      {params.currentUser && (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger className="hidden cursor-pointer items-center gap-2 xl:flex">
              <Image
                src={params.currentUser.avatar || avatarDefault}
                alt="avatar"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full"
              />
              <h3 className="hidden font-Roboto text-sm font-medium xl:block">
                {params.currentUser.name}
              </h3>
              <ArrowDownIcon className="hidden xl:block" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 flex  flex-col gap-6 rounded-2xl border border-grayF3 bg-white p-5 shadow-[0px_6px_30px_0px_rgba(37,_37,_37,_0.16)] dark:border-black44 dark:bg-black29 xl:mr-7">
              {listOptions.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  className="flex cursor-pointer items-center gap-5 p-0"
                  onClick={() => handleClickOption(item)}
                  aria-hidden
                >
                  <div className="text-gray90 dark:text-grayC3">
                    {item.icon}
                  </div>
                  <p className="text-black2F dark:text-grayF6">{item.name}</p>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Popover>
            <PopoverTrigger className="flex cursor-pointer items-center gap-2 xl:hidden">
              <Image
                src={params.currentUser.avatar || avatarDefault}
                alt="avatar"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full"
              />
              <h3 className="hidden font-Roboto text-sm font-medium xl:block">
                {params.currentUser.name}
              </h3>
              <ArrowDownIcon className="hidden xl:block" />
            </PopoverTrigger>
            <PopoverContent className="z-50 mr-5 flex w-auto flex-col gap-6 rounded-2xl border border-grayF3 bg-white p-5 shadow-[0px_6px_30px_0px_rgba(37,_37,_37,_0.16)] dark:border-black44 dark:bg-black29">
              <Command className="gap-4">
                {listOptions.map((item, index) => (
                  <div
                    key={index}
                    className="flex cursor-pointer items-center gap-3 p-0"
                    onClick={() => handleClickOption(item)}
                    aria-hidden
                  >
                    <div className="text-gray90 dark:text-grayC3">
                      {item.icon}
                    </div>
                    <p className="text-black2F dark:text-grayF6">{item.name}</p>
                  </div>
                ))}
              </Command>
            </PopoverContent>
          </Popover>
        </>
      )}
    </>
  );
}
