"use client";

import { cn } from "@/lib/utils";
import { AddressIcon, BuildingIcon, YellowStarIcon } from "../icons";
import Image from "next/image";

interface ExploreWorldItemProps {
  image: string;
}

export function ExploreWorldItem({ image }: ExploreWorldItemProps) {
  return (
    <div className="w-[270px] rounded-3xl border border-grayF3 dark:border-none">
      <div className={cn("relative h-[234px]")}>
        <Image
          src={image}
          alt="explore"
          height={233}
          width={270}
          className="rounded-t-3xl"
        />
        <div className="absolute left-0 top-0 flex items-center gap-3 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-[#141416]">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-black2F dark:text-grayF6">
                5
              </span>
              <YellowStarIcon />
            </div>
          </div>
          <div className="flex h-9 items-center rounded-[20px] bg-white px-4 font-Roboto font-medium text-black2F dark:bg-[#141416] dark:text-grayF6">
            $420
          </div>
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-medium leading-9 text-black2F dark:text-grayF6">
          Cancun Flight
        </h2>
        <p className="mb-[10px] leading-6 text-gray8B dark:text-grayF3">
          City, House
        </p>
        <div className="mb-2 flex items-center gap-[10px]">
          <AddressIcon className="text-gray90 dark:text-grayC3" />
          <span className="text-sm text-gray8B dark:text-grayC3">
            Turkey, Mamaris
          </span>
        </div>
        <div className="mb-2 flex items-center gap-[10px]">
          <BuildingIcon className="text-gray90 dark:text-grayC3" />
          <span className="text-sm text-gray8B dark:text-grayC3">
            Rooms available: 375
          </span>
        </div>
      </div>
    </div>
  );
}
