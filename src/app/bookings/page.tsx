"use client";

import { TotalBookingContent } from "@/components/booking";
import { ChevronLeftIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function BookingPage() {
  const [navActive, setNavActive] = useState("total");

  return (
    <div className="container flex h-full flex-1 flex-col px-5 pt-10 xl:px-0 xl:pt-0">
      <div className="mb-11 hidden items-center gap-3 pt-10 xl:flex">
        <Link href={"/"} className="flex items-center gap-2 dark:text-grayF3">
          <ChevronLeftIcon />
          <span className="leading-6">Back</span>
        </Link>
        <div className="h-3 w-[1px] bg-grayC3 dark:bg-gray8B"></div>
        <p className="leading-6 text-grayC3 dark:text-gray8B">Bookings</p>
      </div>
      <div>
        <h1 className="mb-[30px] text-[30px] font-bold leading-[45px] text-black29 dark:text-grayF6 xl:mb-9 xl:text-5xl xl:leading-[70px]">
          Bookings
        </h1>
        <div className="flex items-center gap-6 border-b-2 border-b-grayF6 dark:border-b-black44 xl:gap-20">
          <div
            className={cn(
              "relative cursor-pointer pb-4 text-xs font-medium dark:text-grayC3 xl:pr-2 xl:text-lg",
              navActive === "total" &&
                "before:absolute before:-bottom-[3px] before:left-0 before:h-[5px] before:w-full before:rounded before:bg-blueFE",
            )}
            onClick={() => setNavActive("total")}
          >
            Total bookings (16)
          </div>
          <div
            className={cn(
              "relative cursor-pointer pb-4 text-xs font-medium dark:text-grayC3 xl:pr-2 xl:text-lg",
              navActive === "upcoming" &&
                "before:absolute before:-bottom-[3px] before:left-0 before:h-[5px] before:w-full before:rounded before:bg-blueFE",
            )}
            onClick={() => setNavActive("upcoming")}
          >
            Upcoming (0)
          </div>
          <div
            className={cn(
              "relative cursor-pointer pb-4 text-xs font-medium dark:text-grayC3 xl:pr-2 xl:text-lg",
              navActive === "cancelled" &&
                "before:absolute before:-bottom-[3px] before:left-0 before:h-[5px] before:w-full before:rounded before:bg-blueFE",
            )}
            onClick={() => setNavActive("cancelled")}
          >
            Cancelled (1)
          </div>
        </div>
        {navActive === "total" && <TotalBookingContent />}
      </div>
    </div>
  );
}
