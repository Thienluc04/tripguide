import {
  BestPlaceSection,
  FeaturedDestinationsSection,
  TrendCitiesSection,
} from "@/components/hotel";
import { AddressIcon, BuildingIcon, YellowStarIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Flight Booking",
  description: "Generated by create next app",
};

interface FlightPageProps {}

export default function FlightPage(props: FlightPageProps) {
  return (
    <div className="flex flex-col gap-[70px] bg-grayFB pt-[124px] dark:bg-black">
      <BestPlaceSection />
      <FeaturedDestinationsSection />
      <TrendCitiesSection className="py-[94px]" />
      <section className="container">
        <div className="mb-[26px]">
          <h2 className="mb-3 text-[40px] font-bold leading-[60px] text-black2F dark:text-grayF6">
            Explore World
          </h2>
          <p className="text-lg font-medium text-gray8B dark:text-gray90">
            10,788 beautiful places to go
          </p>
        </div>
        <div className="flex gap-[30px]">
          {new Array(4).fill(0).map((_, index) => (
            <div
              key={index}
              className="w-[270px] rounded-3xl border border-grayF3 dark:border-none"
            >
              <div className={cn("relative h-[234px]")}>
                <Image
                  src={`/images/flights/explore-${index + 1}.png`}
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
          ))}
        </div>
      </section>
    </div>
  );
}
