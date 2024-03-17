"use client";
import BestExperience from "@images/cars/best-experience.png";

import {
  BestShieldIcon,
  HeadphoneIcon,
  SterlingPoundIcon,
  TagIcon,
  UserIcon,
} from "@/components/icons";
import Image from "next/image";

interface BestExperienceSectionProps {}

const listItem = [
  {
    title: "Deals for every budget",
    description:
      "Choose from & wide variety of car classes new high-quality vehicles teeing your neaps and lucile best",
    icon: <SterlingPoundIcon className="text-blueFE dark:text-gray90" />,
  },
  {
    title: "Awesome Customer Support",
    description:
      "Deliver faster, more personalized support with the power of corrodes and live chat.",
    icon: <HeadphoneIcon className="text-blueFE dark:text-gray90" />,
  },
  {
    title: "Free Cancellation",
    description: "No extra fee, you can cancel your booking anytime",
    icon: <TagIcon className="text-blueFE dark:text-gray90" />,
  },
  {
    title: "Your Best security",
    description:
      "Every detail that is part of our service has been created with your safety in mind",
    icon: <BestShieldIcon className="text-blueFE dark:text-gray90" />,
  },
  {
    title: "Quality Drivers",
    description:
      "We have the most rigorous driver selection process in the market. We work only with the best.",
    icon: <UserIcon className="text-blueFE dark:text-gray90" />,
  },
];

export function BestExperienceSection(props: BestExperienceSectionProps) {
  return (
    <div className="relative">
      <div className="left-0 top-0 xl:absolute">
        <Image
          src={BestExperience}
          alt="best-experience"
          width={720}
          height={846}
        />
      </div>
      <div className="mx-auto max-w-[500px] px-5 xl:px-0">
        <div className="mb-5 xl:mb-11">
          <h2 className="mb-5 text-2xl font-bold leading-9 text-black dark:text-grayF6 xl:mb-4 xl:text-[40px] xl:leading-[60px]">
            Feel the best experience with our rental deals
          </h2>
          <div className="h-[2px] bg-grayF6 dark:bg-black29"></div>
        </div>
        <div className="flex flex-col gap-10">
          {listItem.map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="mt-2 flex h-[52px] w-[52px] items-center justify-center rounded-lg border border-white bg-grayF2 shadow-lg shadow-slate-200 dark:border-black44 dark:bg-black29 dark:shadow-none">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-2xl font-medium leading-9 text-black45 dark:text-grayF3">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-gray90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
