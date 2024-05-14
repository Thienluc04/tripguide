"use client";

import { ChevronLeftIcon } from "@/components/icons";
import { PAGES } from "@/constants/pages.const";
import notifications from "@images/manage-account/notifications.png";
import paymentPayout from "@images/manage-account/payment-payout.png";
import personalDetail from "@images/manage-account/personal-detail.png";
import preference from "@images/manage-account/preference.png";
import privacy from "@images/manage-account/privacy.png";
import security from "@images/manage-account/security.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Item {
  image: string | StaticImageData;
  name: string;
  desc: string;
  tag: string;
}

const listItem: Item[] = [
  {
    image: personalDetail,
    name: "Personal info",
    desc: "Manage Personal details",
    tag: "personal-info",
  },
  {
    image: security,
    name: "Security",
    desc: "Manage Personal details",
    tag: "security",
  },
  {
    image: notifications,
    name: "Notifications",
    desc: "Manage Personal details",
    tag: "notifications",
  },
  {
    image: paymentPayout,
    name: "Payment payout",
    desc: "Manage Personal details",
    tag: "payment-payout",
  },
  {
    image: privacy,
    name: "Privacy & sharing",
    desc: "Manage Personal details",
    tag: "privacy-sharing",
  },
  {
    image: preference,
    name: "Preference",
    desc: "Manage Personal details",
    tag: "preference",
  },
];

interface MangeAccountPageProps {}

export default function MangeAccountPage(props: MangeAccountPageProps) {
  const router = useRouter();

  return (
    <div className="container pt-[30px] xl:pt-0">
      <div className="mb-11 hidden items-center gap-3 pt-10 xl:flex">
        <Link
          href={PAGES.HOME}
          className="flex items-center gap-2 dark:text-grayF3"
        >
          <ChevronLeftIcon />
          <span className="leading-6">Back</span>
        </Link>
        <div className="h-3 w-[1px] bg-grayC3 dark:bg-gray8B"></div>
        <p className="leading-6 text-grayC3 dark:text-gray8B">Manage account</p>
      </div>
      <div className="mx-auto max-w-[1088px]">
        <h1 className="mb-2 text-center text-[30px] font-bold leading-[45px] text-black dark:text-grayF6 xl:text-left xl:text-5xl xl:leading-[70px]">
          Manage Account
        </h1>
        <p className="text-center text-xs dark:text-grayC3 xl:text-left xl:text-base xl:leading-6">
          Manage your TripGuide.com experience
        </p>
        <div className="mt-[30px] flex flex-wrap justify-center gap-5 xl:mt-8 xl:gap-10">
          {listItem.map((item, index) => (
            <div
              key={index}
              className="w-[242px] cursor-pointer rounded-[10px] border border-grayF6 bg-white px-8 py-5 dark:border-black29 dark:bg-black29"
              onClick={() => router.push("/manage-account/detail#" + item.tag)}
            >
              <div className="mb-3 flex justify-center">
                <Image src={item.image} alt="mange-account-item-img" />
              </div>
              <h3 className="text-center text-xl font-bold text-black29 dark:text-grayF3">
                {item.name}
              </h3>
              <p className="text-center text-sm text-gray8B">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
