"use client";

import { ChevronLeftIcon } from "@/components/icons";
import {
  NotificationsContent,
  PaymentContent,
  PersonalInfoContent,
  PreferenceContent,
  PrivacyContent,
  SecurityContent,
} from "@/components/manage-account";
import { listNavItem } from "@/constants/manage-account.const";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ManageAccountDetailProps {}

export default function ManageAccountDetail(props: ManageAccountDetailProps) {
  const [currentTag, setCurrentTag] = useState<CurrentTag>("");
  const router = useRouter();

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

  const handleClickNavItem = (item: NavItem) => {
    setCurrentTag(item.tag as CurrentTag);
  };

  if (!currentTag) {
    return "loading...";
  }

  return (
    <div className="container">
      <div className="mb-11 flex items-center gap-3 pt-10">
        <Link href={"/"} className="flex items-center gap-2 dark:text-grayF3">
          <ChevronLeftIcon />
          <span className="leading-6">Back</span>
        </Link>
        <div className="h-3 w-[1px] bg-grayC3 dark:bg-gray8B"></div>
        <p className="leading-6 text-grayC3 dark:text-gray8B">
          Personal Information
        </p>
      </div>
      <div className="flex items-center gap-16 border-b border-grayF3 dark:border-black44">
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
      <div className="w-[740px]">
        {currentTag === "personal-info" && <PersonalInfoContent />}
        {currentTag === "security" && <SecurityContent />}
        {currentTag === "notifications" && <NotificationsContent />}
        {currentTag === "payment-payout" && <PaymentContent />}
        {currentTag === "privacy-sharing" && <PrivacyContent />}
        {currentTag === "preference" && <PreferenceContent />}
      </div>
    </div>
  );
}
