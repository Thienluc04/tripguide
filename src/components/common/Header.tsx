"use client";

import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import avatar from "@images/avatar.png";
import logo from "@images/logo.png";
import flagUSA from "@images/usa-flag.png";
import {
  ArrowDownIcon,
  CardIcon,
  NotificationIcon,
  ProfileIcon,
  SuitCaseIcon,
  TagIcon,
  UserIcon,
} from "../icons";
import { SignOutIcon } from "../icons/SignOutIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown";
import notiAvatar1 from "@images/header/noti-avatar-1.png";
import notiAvatar2 from "@images/header/noti-avatar-2.png";
import notiAvatar3 from "@images/header/noti-avatar-3.png";
import notiAvatar4 from "@images/header/noti-avatar-4.png";
import { cn } from "@/lib/utils";
import { spawn } from "child_process";

interface HeaderProps extends ComponentProps<"div"> {}

const listOptions: OptionHeader[] = [
  {
    icon: <ProfileIcon width={16} height={16} />,
    name: "My Profile",
  },
  {
    icon: <UserIcon width={16} height={16} />,
    name: "Manage account",
  },
  {
    icon: <SuitCaseIcon width={16} height={16} />,
    name: "Bookings",
  },
  {
    icon: <CardIcon width={16} height={16} />,
    name: "My wallet",
  },
  {
    icon: <TagIcon className="rotate-[270deg]" width={16} height={16} />,
    name: "My rewards",
  },
  {
    icon: <SignOutIcon width={16} height={16} />,
    name: "Sign out",
  },
];

const listNoti: NotiHeader[] = [
  {
    avatar: notiAvatar1,
    title: "You Booked and earn 8 point for on custoner creation Steve Mathew ",
    unseen: false,
    date: "4 weeks ago",
  },
  {
    avatar: notiAvatar2,
    title: "You Booked and earn 8 point for on custoner creation Steve Mathew ",
    unseen: true,
    date: "4 weeks ago",
  },
  {
    avatar: notiAvatar3,
    title: "You Booked and earn 8 point for on custoner creation Steve Mathew ",
    unseen: false,
    date: "18 hours ago",
  },
  {
    avatar: notiAvatar4,
    title: "You Booked and earn 8 point for on custoner creation Steve Mathew ",
    unseen: false,
    date: "22 hours ago",
  },
];

export function Header({ className }: HeaderProps) {
  return (
    <div
      className={twMerge(
        "flex items-center justify-between px-10 py-5 shadow-[0px_-1px_4px_0px_#E2E2EA]",
        className,
      )}
    >
      <Link href={"/"} className="flex items-center gap-[10px]">
        <Image src={logo} alt="logo" width={40} height={38}></Image>
        <h2 className="font-OpenSans text-xl font-bold">TripGuide</h2>
      </Link>
      <div className="flex items-center gap-4">
        <h3 className="font-Roboto text-sm font-bold text-gray8B">USD</h3>
        <Image src={flagUSA} width={20} height={20} alt="usa-flag"></Image>
        <DropdownMenu>
          <DropdownMenuTrigger className="relative cursor-pointer">
            <NotificationIcon className="text-gray8B" />
            <span
              className="absolute -right-2 -top-2 flex h-4 min-w-[16px] items-center
            justify-center rounded-full bg-red57 px-1 text-[10px] font-medium text-white"
            >
              10
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-10 mr-4 flex flex-col gap-5 rounded-[20px] border border-grayF3 bg-white py-5 shadow-[0px_20px_40px_0px_rgba(0,_0,_0,_0.10)]">
            {listNoti.map((item, index) => (
              <DropdownMenuItem
                key={index}
                className={cn(
                  "flex cursor-pointer items-start gap-2 p-0 px-6 py-2",
                  item.unseen && "rounded-lg bg-grayF6 px-3",
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
                    You Booked and earn 8 point for on custoner creation Steve
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
          <UserIcon className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-grayF3 text-grayC3"></UserIcon>
        </Link> */}

        {/* User logged */}

        <DropdownMenu>
          <DropdownMenuTrigger className="flex cursor-pointer items-center gap-2">
            <Image src={avatar} alt="avatar" width={32} height={32}></Image>
            <h3 className="font-Roboto text-sm font-medium">Delowar</h3>
            <ArrowDownIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-10 mr-7 flex  flex-col gap-6 rounded-2xl border border-grayF3 bg-white p-5 shadow-[0px_6px_30px_0px_rgba(37,_37,_37,_0.16)]">
            {listOptions.map((item, index) => (
              <DropdownMenuItem
                key={index}
                className="flex cursor-pointer items-center gap-5 p-0"
              >
                <div className="text-gray90">{item.icon}</div>
                <p className="text-black2F">{item.name}</p>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
