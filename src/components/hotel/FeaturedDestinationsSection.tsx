import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps } from "react";

import destinations1 from "@images/destinations/destinations-1.png";
import destinations2 from "@images/destinations/destinations-2.png";
import destinations3 from "@images/destinations/destinations-3.png";
import destinations4 from "@images/destinations/destinations-4.png";
import destinations5 from "@images/destinations/destinations-5.png";
import destinations6 from "@images/destinations/destinations-6.png";
import smallAvatar1 from "@images/destinations/small-avatar-1.png";
import smallAvatar2 from "@images/destinations/small-avatar-2.png";

interface FeaturedDestinationsSectionProps extends ComponentProps<"section"> {}

export function FeaturedDestinationsSection({
  className,
  ...props
}: FeaturedDestinationsSectionProps) {
  return (
    <section className={cn("container", className)} {...props}>
      <h2 className="mb-3 text-5xl font-bold text-black dark:text-white">
        Featured Destinations
      </h2>
      <p className="mb-9 dark:text-grayC3">
        Popular destinations open to visitors from Indonesia
      </p>
      <div className="flex gap-[30px]">
        <div className="flex flex-col gap-[30px]">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-[20px]"
              style={{
                backgroundImage:
                  "linear-gradient(39deg, rgba(3, 3, 3, 0.54) -3.66%, rgba(6, 6, 6, 0.00) 45.57%",
              }}
            ></div>
            <Image
              src={destinations1}
              alt="destinations-1"
              width={870}
              height={280}
            ></Image>
            <div className="absolute inset-0 inline-flex flex-col justify-between p-5">
              <div>
                <span className="inline rounded-[20px] bg-white px-5 text-lg font-bold text-red shadow-[0px_4px_10px_0px_rgba(40,_40,_40,_0.12)]">
                  3.5
                </span>
              </div>
              <div>
                <h3 className="mb-5 text-[40px] font-bold text-white">
                  Barcelona Tour
                </h3>
                <div className="flex items-center gap-2">
                  <Image
                    src={smallAvatar1}
                    alt="small-avatar-1"
                    width={28}
                    height={28}
                  ></Image>
                  <span className="text-xl text-white">196 Activities</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[54px]">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-[20px]"
                style={{
                  backgroundImage:
                    "linear-gradient(357deg, rgba(30, 30, 30, 0.67) 11.64%, rgba(66, 66, 66, 0.00) 23.22%)",
                }}
              ></div>
              <Image
                src={destinations2}
                alt="destinations-2"
                width={408}
                height={408}
              ></Image>
              <div className="absolute inset-0 inline-flex flex-col justify-between p-5">
                <div>
                  <span className="inline rounded-[20px] bg-white px-5 text-lg font-bold text-red shadow-[0px_4px_10px_0px_rgba(40,_40,_40,_0.12)]">
                    3.5
                  </span>
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    London, United State
                  </h3>
                  <div className="flex items-center gap-2">
                    <Image
                      src={smallAvatar2}
                      alt="small-avatar-2"
                      width={28}
                      height={28}
                    ></Image>
                    <span className="text-sm text-white">196 Activities</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-[20px]"
                style={{
                  backgroundImage:
                    "linear-gradient(2deg, rgba(35, 35, 35, 0.58) 13.14%, rgba(196, 196, 196, 0.00) 26.65%)",
                }}
              ></div>
              <Image
                src={destinations3}
                alt="destinations-3"
                width={408}
                height={408}
              ></Image>
              <div className="absolute inset-0 inline-flex flex-col justify-between p-5">
                <div>
                  <span className="inline rounded-[20px] bg-white px-5 text-lg font-bold text-red shadow-[0px_4px_10px_0px_rgba(40,_40,_40,_0.12)]">
                    3.5
                  </span>
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    Australia Tour
                  </h3>
                  <div className="flex items-center gap-2">
                    <Image
                      src={smallAvatar2}
                      alt="small-avatar-2"
                      width={28}
                      height={28}
                    ></Image>
                    <span className="text-sm text-white">196 Activities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-[15px]"
              style={{
                backgroundImage:
                  "linear-gradient(1deg, rgba(111, 130, 123, 0.48) 19.18%, rgba(31, 71, 56, 0.00) 39.64%)",
              }}
            ></div>
            <Image
              src={destinations4}
              alt="destinations-4"
              width={270}
              height={220}
            ></Image>
            <div className="absolute inset-0 inline-flex flex-col justify-between p-5">
              <div>
                <span className="inline rounded-[20px] bg-white px-4 text-sm font-bold text-red shadow-[0px_4px_10px_0px_rgba(40,_40,_40,_0.12)]">
                  3.5
                </span>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  Australia Tour
                </h3>
                <div className="flex items-center gap-2">
                  <Image
                    src={smallAvatar2}
                    alt="small-avatar-2"
                    width={14}
                    height={14}
                  ></Image>
                  <span className="text-xs text-white">196 Activities</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 rounded-[15px]"
              style={{
                backgroundImage:
                  "linear-gradient(1deg, rgba(111, 130, 123, 0.48) 19.18%, rgba(31, 71, 56, 0.00) 39.64%)",
              }}
            ></div>
            <Image
              src={destinations5}
              alt="destinations-5"
              width={270}
              height={220}
            ></Image>
            <div className="absolute inset-0 inline-flex flex-col justify-between p-5">
              <div>
                <span className="inline rounded-[20px] bg-white px-4 text-sm font-bold text-red shadow-[0px_4px_10px_0px_rgba(40,_40,_40,_0.12)]">
                  3.5
                </span>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  Japan Tour
                </h3>
                <div className="flex items-center gap-2">
                  <Image
                    src={smallAvatar2}
                    alt="small-avatar-2"
                    width={14}
                    height={14}
                  ></Image>
                  <span className="text-xs text-white">196 Activities</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 rounded-[15px]"
              style={{
                backgroundImage:
                  "linear-gradient(1deg, rgba(111, 130, 123, 0.48) 19.18%, rgba(31, 71, 56, 0.00) 39.64%)",
              }}
            ></div>
            <Image
              src={destinations6}
              alt="destinations-6"
              width={270}
              height={220}
            ></Image>
            <div className="absolute inset-0 inline-flex flex-col justify-between p-5">
              <div>
                <span className="inline rounded-[20px] bg-white px-4 text-sm font-bold text-red shadow-[0px_4px_10px_0px_rgba(40,_40,_40,_0.12)]">
                  3.5
                </span>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  Japan Tour
                </h3>
                <div className="flex items-center gap-2">
                  <Image
                    src={smallAvatar2}
                    alt="small-avatar-2"
                    width={14}
                    height={14}
                  ></Image>
                  <span className="text-xs text-white">196 Activities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
