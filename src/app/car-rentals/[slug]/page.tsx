"use client";

import { Breadcrumb, FindSection, TrendingSection } from "@/components/common";
import { AddressIcon, YellowStarIcon } from "@/components/icons";
import Image from "next/image";

import carDetail1 from "@images/cars/detail-1.png";
import carDetail2 from "@images/cars/detail-2.png";
import carDetail3 from "@images/cars/detail-3.png";
import carDetail4 from "@images/cars/detail-4.png";

import certified from "@images/cars/certified.png";
import guarantee from "@images/cars/guarantee.png";
import guaranteeDark from "@images/cars/guarantee-dark.png";
import insured from "@images/cars/insured.png";
import insuredDark from "@images/cars/insured-dark.png";
import { DetailCarContent, FeedbackSection } from "@/components/car/detail";
import { TrendItem } from "@/types/general";
import { useCommonStore } from "@/store/commonStore";

interface CarDetailPageProps {}

export default function CarDetailPage(props: CarDetailPageProps) {
  const listTrending: TrendItem[] = [
    {
      image: "/images/hotels/trending-1.png",
      name: "Hotel Sea Crown",
      rating: 4.8,
      totalReviews: 122,
    },
    {
      image: "/images/hotels/trending-2.png",
      name: "Long Beach Hotel",
      rating: 4.8,
      totalReviews: 122,
    },
    {
      image: "/images/hotels/trending-3.png",
      name: "Hotel The Cox Today",
      rating: 4.8,
      totalReviews: 122,
    },
    {
      image: "/images/hotels/trending-4.png",
      name: "Vivanta Goa, Panaji",
      rating: 4.8,
      totalReviews: 122,
    },
  ];

  const { params } = useCommonStore();

  return (
    <div className="container">
      <Breadcrumb
        list={["Home", "Cars"]}
        last="Car Details"
        className=" mb-[30px] mt-0 pt-10"
      />
      <div>
        <h1 className="mb-4 text-5xl font-bold leading-[70px] text-black dark:text-white">
          Best Sellar BMW i10 - 2020
        </h1>
        <div className="mb-[50px] flex gap-[22px]">
          <div className="flex items-center gap-[10px]">
            <YellowStarIcon />
            <p className="text-sm text-black45 dark:text-grayC3">
              4.8 <span className="text-gray8B">(122 reviews)</span>
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <AddressIcon className="text-gray8B" />
            <p className="text-sm text-gray8B">Zuich town, Switzerland</p>
          </div>
        </div>
        <div className="mb-[60px] flex gap-3">
          <Image
            src={carDetail1}
            alt="car-detail-img"
            width={780}
            height={820}
            className="rounded-l-3xl"
          />
          <div className="flex flex-col justify-between gap-3">
            <Image
              src={carDetail2}
              alt="car-detail-img"
              width={780}
              height={820}
              className="rounded-tr-3xl"
            />
            <Image
              src={carDetail3}
              alt="car-detail-img"
              width={780}
              height={820}
            />
            <Image
              src={carDetail4}
              alt="car-detail-img"
              width={780}
              height={820}
              className="rounded-br-3xl"
            />
          </div>
        </div>
        <div className="mb-10 flex items-center gap-[50px]">
          <div className="flex items-center gap-3">
            <Image src={certified} alt="certified" width={50} height={50} />
            <p className="text-lg font-medium dark:text-grayF6">
              Certified Owners
            </p>
          </div>
          <div className="flex items-center gap-3">
            {params.theme === "dark" ? (
              <Image
                src={guaranteeDark}
                alt="guarantee-dark"
                width={50}
                height={50}
              />
            ) : (
              <Image src={guarantee} alt="guarantee" width={50} height={50} />
            )}
            <p className="text-lg font-medium dark:text-grayF6">
              Best Price Guarantee
            </p>
          </div>
          <div className="flex items-center gap-3">
            {params.theme === "dark" ? (
              <Image src={insuredDark} alt="insured" width={50} height={50} />
            ) : (
              <Image
                src={insuredDark}
                alt="insured-dark"
                width={50}
                height={50}
              />
            )}
            <p className="text-lg font-medium dark:text-grayF6">100% insured</p>
          </div>
        </div>
        <DetailCarContent className="mb-[70px]" />
        <FeedbackSection />
        <TrendingSection
          data={listTrending}
          className="!mb-[70px]"
          title="Trending Car"
        />
        <FindSection title="Find 250+ Cars" />
      </div>
    </div>
  );
}
