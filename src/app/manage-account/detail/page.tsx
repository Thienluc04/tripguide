"use client";

import userApi from "@/api-client/user-api";
import Loading from "@/app/loading";
import { ChevronDownIcon, ChevronLeftIcon } from "@/components/icons";
import {
  NotificationsContent,
  PaymentContent,
  PersonalInfoContent,
  PreferenceContent,
  PrivacyContent,
  SecurityContent,
} from "@/components/manage-account";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { listNavItem } from "@/constants/manage-account.const";
import { PAGES } from "@/constants/pages.const";
import { cn } from "@/lib/utils";
import { useCommonStore } from "@/store/common-store";
import { User } from "@/types/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ManageAccountDetailProps {}

export default function ManageAccountDetail(props: ManageAccountDetailProps) {
  const [currentTag, setCurrentTag] = useState<CurrentTag>("");
  const router = useRouter();
  const { params } = useCommonStore();
  const [profile, setProfile] = useState<User>();

  useEffect(() => {
    if (global.window) {
      setCurrentTag(global.window?.location?.hash.split("#")[1] as CurrentTag);
    }
  }, [global.window]);

  useEffect(() => {
    if (currentTag) {
      router.replace("/manage-account/detail#" + currentTag, { scroll: true });
    }
  }, [currentTag]);

  useEffect(() => {
    (async () => {
      const access_token = params.tokens?.access_token as string;
      if (access_token) {
        const { result } = await userApi.getProfile(access_token);
        setProfile(result);
      }
    })();
  }, [params]);

  const handleClickNavItem = (item: NavItem) => {
    setCurrentTag(item.tag as CurrentTag);
  };

  if (!currentTag || !profile) {
    return <Loading />;
  }

  return (
    <div className="container pt-10 xl:pt-0">
      <div className="mb-11 hidden items-center gap-3 pt-10 xl:flex">
        <Link
          href={PAGES.MANAGE_ACCOUNT}
          className="flex items-center gap-2 dark:text-grayF3"
        >
          <ChevronLeftIcon />
          <span className="leading-6">Back</span>
        </Link>
        <div className="h-3 w-[1px] bg-grayC3 dark:bg-gray8B"></div>
        <p className="leading-6 text-grayC3 dark:text-gray8B">
          Personal Information
        </p>
      </div>
      <div className="hidden items-center gap-16 border-b border-grayF3 dark:border-black44 xl:flex">
        {listNavItem.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClickNavItem(item)}
            className={cn(
              "relative w-auto cursor-pointer pb-6 text-xl font-medium text-grayA7 dark:text-gray8B",
              item.tag === currentTag &&
                "font-bold text-blue53 before:absolute before:-bottom-[1px] before:h-[2px] before:w-full before:bg-blueFF dark:text-grayFD dark:before:bg-primary",
            )}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="mx-5 mb-[30px] xl:hidden">
        <Select onValueChange={(value) => setCurrentTag(value as CurrentTag)}>
          <SelectTrigger
            className="h-auto w-full rounded-xl border-grayC3 px-6 py-3 text-base text-blue53 dark:border-black44 dark:text-grayF3"
            icon={
              <ChevronDownIcon className="w-[14px] text-black44 dark:text-grayC3" />
            }
          >
            <SelectValue
              placeholder={
                listNavItem.find((item) => item.tag === currentTag)?.title
              }
            />
          </SelectTrigger>
          <SelectContent className="border-grayC3 bg-white dark:border-black44 dark:bg-black">
            <SelectGroup>
              {listNavItem.map((item) => (
                <SelectItem
                  key={item.tag}
                  onSelect={() => handleClickNavItem(item)}
                  className="text-base text-black44 dark:text-grayF3"
                  value={item.tag}
                >
                  {item.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mx-5 xl:mx-0 xl:w-[740px]">
        {currentTag === "personal-info" && (
          <PersonalInfoContent userInfo={profile as User} />
        )}
        {currentTag === "security" && <SecurityContent />}
        {currentTag === "notifications" && <NotificationsContent />}
        {currentTag === "payment-payout" && <PaymentContent />}
        {currentTag === "privacy-sharing" && <PrivacyContent />}
        {currentTag === "preference" && <PreferenceContent />}
      </div>
    </div>
  );
}
