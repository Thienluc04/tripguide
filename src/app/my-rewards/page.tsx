"use client";

import { ChevronLeftIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface MyRewardsPageProps {}

export default function MyRewardsPage(props: MyRewardsPageProps) {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="container px-5 pt-10 xl:px-0 xl:pt-0">
      <div className="mb-11 hidden items-center gap-3 pt-10 xl:flex">
        <Link href={"/"} className="flex items-center gap-2 dark:text-grayF3">
          <ChevronLeftIcon />
          <span className="leading-6">Back</span>
        </Link>
        <div className="h-3 w-[1px] bg-grayC3 dark:bg-gray8B"></div>
        <p className="leading-6 text-grayC3 dark:text-gray8B">My rewards</p>
      </div>
      <h1 className="mb-5 text-[30px] font-bold leading-10 text-black29 dark:text-grayF6 xl:mb-10 xl:text-5xl xl:leading-[70px]">
        My Rewards
      </h1>
      <div className="mb-5 flex items-center gap-[30px] border-b-2 border-b-grayF6 dark:border-b-black44 xl:mb-8 xl:gap-20">
        <div
          className={cn(
            "relative cursor-pointer pb-4 pr-2 text-lg font-medium dark:text-grayC3",
            activeTab === "summary" &&
              "before:absolute before:-bottom-[3px] before:left-0 before:h-[5px] before:w-full before:rounded before:bg-blueFE",
          )}
          onClick={() => setActiveTab("summary")}
        >
          Summary
        </div>
        <div
          className={cn(
            "relative cursor-pointer pb-4 pr-2 text-lg font-medium dark:text-grayC3",
            activeTab === "about" &&
              "before:absolute before:-bottom-[3px] before:left-0 before:h-[5px] before:w-full before:rounded before:bg-blueFE",
          )}
          onClick={() => setActiveTab("about")}
        >
          About TripGuide Rewards
        </div>
      </div>
      {activeTab === "summary" && (
        <div className="rounded-2xl bg-white px-3 py-5 shadow-lg dark:bg-black29 xl:px-0 xl:py-14">
          <div className="mb-5 flex justify-between  xl:mb-[30px] xl:justify-center xl:gap-[74px]">
            <div>
              <h2 className="mb-2 text-2xl font-bold leading-9 dark:text-grayF3 xl:text-[34px] xl:leading-[44px]">
                Elite status
              </h2>
              <p className="text-xs leading-6 dark:text-gray8B xl:text-base">
                Points Earned in 2020
              </p>
            </div>
            <div className="rounded-xl px-7 py-4 shadow-md dark:bg-black44 dark:shadow-none">
              <p className="mb-2 text-center text-lg text-black29 dark:text-grayF3">
                18,592
              </p>
              <p className="text-center text-sm leading-5 text-gray8B dark:text-gray90">
                (worth 37 USD)
              </p>
            </div>
          </div>
          <p className="mb-5 text-center text-sm leading-6 text-gray8B dark:text-gray90 xl:mb-14 xl:text-base">
            25 USD is the minimum rewards claim at a time
          </p>
          <div className="flex flex-wrap gap-6 xl:justify-center xl:gap-[94px]">
            <div className="flex h-[85px] w-[calc(50%-24px)] flex-col items-center justify-center gap-1 rounded-lg bg-blueE6 text-sm text-white xl:h-[100px] xl:w-[162px] xl:flex-none xl:text-base">
              <p>Total Points</p>
              <p>Pending</p>
              <p className="mt-2">0</p>
            </div>
            <div className="flex h-[85px] w-[calc(50%-24px)] flex-col items-center justify-center gap-1 rounded-lg bg-orange54 text-sm text-white xl:h-[100px] xl:w-[162px] xl:flex-none xl:text-base">
              <p>Accumulated and</p>
              <p className="font-medium">Available Points</p>
              <p className="mt-2">10.00</p>
            </div>
            <div className="flex h-[85px] w-[calc(50%-24px)] flex-col items-center justify-center gap-1 rounded-lg bg-green7D text-sm text-white xl:h-[100px] xl:w-[162px] xl:flex-none xl:text-base">
              <p>Expiring</p>
              <p className="font-medium">Dec 31,2016</p>
              <p className="mt-2">0</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
