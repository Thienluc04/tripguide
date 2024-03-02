"use client";

import { ChevronLeftIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface MyRewardsPageProps {}

export default function MyRewardsPage(props: MyRewardsPageProps) {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="container">
      <div className="mb-11 flex items-center gap-3 pt-10">
        <Link href={"/"} className="flex items-center gap-2 dark:text-grayF3">
          <ChevronLeftIcon />
          <span className="leading-6">Back</span>
        </Link>
        <div className="h-3 w-[1px] bg-grayC3 dark:bg-gray8B"></div>
        <p className="leading-6 text-grayC3 dark:text-gray8B">My rewards</p>
      </div>
      <h1 className="mb-10 text-5xl font-bold leading-[70px] text-black29 dark:text-grayF6">
        My Rewards
      </h1>
      <div className="mb-8 flex items-center gap-20 border-b-2 border-b-grayF6 dark:border-b-black44">
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
        <div className="rounded-2xl bg-white py-14 shadow-lg dark:bg-black29">
          <div className="mb-[30px] flex justify-center gap-[74px]">
            <div>
              <h2 className="mb-2 text-[34px] font-bold leading-[44px] dark:text-grayF3">
                Elite status
              </h2>
              <p className="leading-6 dark:text-gray8B">
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
          <p className="mb-14 text-center leading-6 text-gray8B dark:text-gray90">
            25 USD is the minimum rewards claim at a time
          </p>
          <div className="flex justify-center gap-[94px]">
            <div className="flex h-[100px] w-[162px] flex-col items-center justify-center gap-1 rounded-lg bg-blueE6 text-white">
              <p>Total Points</p>
              <p>Pending</p>
              <p className="mt-2">0</p>
            </div>
            <div className="flex h-[100px] w-[162px] flex-col items-center justify-center gap-1 rounded-lg bg-orange54 text-white">
              <p>Accumulated and</p>
              <p className="font-medium">Available Points</p>
              <p className="mt-2">10.00</p>
            </div>
            <div className="flex h-[100px] w-[162px] flex-col items-center justify-center gap-1 rounded-lg bg-green7D text-white">
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
