"use client";

import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import { cn } from "@/lib/utils";
import avatar from "@images/avatar.png";

import flagUSA from "@images/header/usa-flag.png";
import logo from "@images/logo.png";

import {
  listCurrency,
  listLanguage,
  listNoti,
  listOptions,
} from "@/constants/header.const";
import {
  ArrowDownIcon,
  CircleTickIcon,
  NotificationIcon,
  SearchIcon,
  UserIcon,
  XIcon,
} from "../icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown";
import { useRouter } from "next/navigation";

interface HeaderProps extends ComponentProps<"div"> {}

export function Header({ className }: HeaderProps) {
  const router = useRouter();

  const handleClickOption = (item: OptionHeader) => {
    if (item.href) {
      router.push(item.href);
    } else {
      console.log("sign out");
    }
  };

  return (
    <div
      className={twMerge(
        "flex items-center justify-between bg-white px-10 py-5 shadow-[0px_-1px_4px_0px_#E2E2EA] dark:bg-black29 dark:text-white",
        className,
      )}
    >
      <Link href={"/"} className="flex items-center gap-[10px]">
        <Image src={logo} alt="logo" width={40} height={38}></Image>
        <h2 className="font-OpenSans text-xl font-bold">TripGuide</h2>
      </Link>
      <div className="flex items-center gap-4">
        <Popover>
          <PopoverTrigger className="cursor-pointer">
            <h3 className="font-Roboto text-sm font-bold text-gray8B dark:text-grayF3">
              USD
            </h3>
          </PopoverTrigger>
          <PopoverContent className="mt-2 max-h-[416px] w-[340px] rounded-2xl border border-grayF3 bg-white px-5 py-6 shadow-[0px_32px_60px_-32px_rgba(0,_0,_0,_0.10)] dark:border-black44 dark:bg-black29">
            <Command>
              <div className="mb-2 flex items-center justify-end">
                <XIcon className="cursor-pointer text-grayC3" />
              </div>
              <div className="mb-3 flex items-center rounded-lg bg-grayF6 px-5 dark:bg-[#353945]">
                <SearchIcon className="text-grayC3" width={16} height={16} />
                <div className="ml-4 mr-3 h-[10px] w-[1px] bg-grayF3"></div>
                <div className="flex-1">
                  <CommandInput
                    placeholder="Search language"
                    className="dark:text-grayF6"
                  />
                </div>
              </div>
              <CommandEmpty className="dark:text-white">
                No currency found
              </CommandEmpty>
              <CommandGroup>
                <div className="custom-scrollbar flex max-h-[288px] flex-col gap-[10px] overflow-auto px-2">
                  {listCurrency.map((item, index) => (
                    <CommandItem
                      key={index}
                      className={cn(
                        "flex cursor-pointer items-center justify-between rounded-lg px-3 py-[10px] transition-all hover:bg-grayF6 dark:hover:bg-[#353945]",
                        item.active && "bg-grayF6 dark:bg-[#353945]",
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-medium dark:text-grayF6">
                          {item.name}
                        </p>
                        <span className="text-lg text-gray8B dark:text-grayC3">
                          ({item.description})
                        </span>
                      </div>
                      {item.active && <CircleTickIcon />}
                    </CommandItem>
                  ))}
                </div>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild className="cursor-pointer">
            <Image src={flagUSA} width={20} height={20} alt="usa-flag"></Image>
          </PopoverTrigger>
          <PopoverContent className="mt-2 max-h-[416px] w-[340px] rounded-2xl border border-grayF3 bg-white px-5 py-6 shadow-[0px_32px_60px_-32px_rgba(0,_0,_0,_0.10)] dark:border-black44 dark:bg-black29">
            <Command>
              <div className="mb-2 flex items-center justify-end">
                <XIcon className="cursor-pointer text-grayC3" />
              </div>
              <div className="mb-3 flex items-center rounded-md px-5 dark:bg-[#353945]">
                <SearchIcon className="text-grayC3" width={16} height={16} />
                <div className="ml-4 mr-3 h-[10px] w-[1px] bg-grayF3"></div>
                <div className="flex-1">
                  <CommandInput placeholder="Search language" />
                </div>
              </div>
              <CommandEmpty>No language found</CommandEmpty>
              <CommandGroup>
                <div className="custom-scrollbar flex max-h-[288px] flex-col gap-[10px] overflow-auto px-2">
                  {listLanguage.map((item, index) => (
                    <CommandItem
                      key={index}
                      className={cn(
                        "flex cursor-pointer items-center justify-between rounded-lg px-3 py-[10px] transition-all hover:bg-grayF6 dark:hover:bg-[#353945]",
                        item.active && "bg-grayF6 dark:bg-[#353945]",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={item.flag}
                          alt="flag"
                          width={28}
                          height={28}
                        />
                        <span className="text-lg font-medium dark:text-grayFD">
                          {item.name}
                        </span>
                      </div>
                      {item.active && <CircleTickIcon />}
                    </CommandItem>
                  ))}
                </div>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <DropdownMenu>
          <DropdownMenuTrigger className="relative cursor-pointer">
            <NotificationIcon className="text-gray8B dark:text-grayF3" />
            <span
              className="absolute -right-2 -top-2 flex h-4 min-w-[16px] items-center
            justify-center rounded-full bg-red57 px-1 text-[10px] font-medium text-white"
            >
              10
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-10 mr-4 mt-2 flex flex-col gap-5 rounded-[20px] border border-grayF3 bg-white py-5 shadow-[0px_20px_40px_0px_rgba(0,_0,_0,_0.10)] dark:border-black44 dark:bg-black29">
            {listNoti.map((item, index) => (
              <DropdownMenuItem
                key={index}
                className={cn(
                  "flex cursor-pointer items-start gap-2 p-0 px-6 py-2",
                  item.unseen && "rounded-lg bg-grayF6 px-3 dark:bg-[#353945]",
                )}
              >
                <div className="flex items-center gap-2">
                  {item.unseen && (
                    <span className="h-1 w-1 rounded-full bg-red"></span>
                  )}
                  <Image
                    src={item.avatar}
                    alt="avatar-noti"
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <p className="mb-[6px] max-w-[292px] text-sm leading-[18px] text-gray8B">
                    You Booked and earn 8 point for on customer creation Steve
                    Mathew
                  </p>
                  <p className="text-xs leading-[18px] text-grayC3">
                    4 weeks ago
                  </p>
                </div>
              </DropdownMenuItem>
            ))}
            <p className="cursor-pointer text-center text-xs font-medium leading-5 text-gray8B">
              See all activity
            </p>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="h-8 w-[1px] bg-grayF3"></div>

        {/* <Link href={"/sign-in"}>
          <UserIcon
            className="flex cursor-pointer items-center justify-center rounded-full bg-grayF3 p-[6px] text-grayC3 dark:bg-black44"
            height={28}
            width={28}
          />
        </Link> */}

        {/* User logged */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex cursor-pointer items-center gap-2">
            <Image src={avatar} alt="avatar" width={32} height={32}></Image>
            <h3 className="font-Roboto text-sm font-medium">Delowar</h3>
            <ArrowDownIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-10 mr-7 flex  flex-col gap-6 rounded-2xl border border-grayF3 bg-white p-5 shadow-[0px_6px_30px_0px_rgba(37,_37,_37,_0.16)] dark:border-black44 dark:bg-black29">
            {listOptions.map((item, index) => (
              <DropdownMenuItem
                key={index}
                className="flex cursor-pointer items-center gap-5 p-0"
                onClick={() => handleClickOption(item)}
                aria-hidden
              >
                <div className="text-gray90 dark:text-grayC3">{item.icon}</div>
                <p className="text-black2F dark:text-grayF6">{item.name}</p>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
