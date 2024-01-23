"use client";

import { Breadcrumb } from "@/components/common";
import Image, { StaticImageData } from "next/image";
import personalDetail from "@images/manage-account/personal-detail.png";
import security from "@images/manage-account/security.png";
import notifications from "@images/manage-account/notifications.png";
import paymentPayout from "@images/manage-account/payment-payout.png";
import privacy from "@images/manage-account/privacy.png";
import preference from "@images/manage-account/preference.png";
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
    <div className="container">
      <Breadcrumb list={["Home"]} last="Manage account" className="mb-8" />
      <div className="mx-auto max-w-[1088px]">
        <h1 className="mb-2 text-5xl font-bold leading-[70px] text-black">
          Manage Account
        </h1>
        <p className="leading-6">Manage your TripGuide.com experience</p>
        <div className="mt-8 flex flex-wrap justify-center gap-10">
          {listItem.map((item, index) => (
            <div
              key={index}
              className="w-[242px] cursor-pointer rounded-[10px] border border-grayF6 bg-white px-8 py-5"
              onClick={() => router.push("/manage-account/detail#" + item.tag)}
            >
              <div className="mb-3 flex justify-center">
                <Image src={item.image} alt="mange-account-item-img" />
              </div>
              <h3 className="text-center text-xl font-bold text-black29">
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
