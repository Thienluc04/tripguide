"use client";

import { Breadcrumb, FindSection, TrendingSection } from "@/components/common";
import {
  HotelDetailsContent,
  LatestReview,
  RoomSuggest,
} from "@/components/hotel";
import {
  AddressIcon,
  CircleLoading,
  YellowEmptyStar,
  YellowHalfStar,
  YellowStarIcon,
} from "@/components/icons";
import { Button, Textarea } from "@/components/ui";
import { TrendItem } from "@/types/general";
import Image from "next/image";

import hotelDetail1 from "@images/hotels/detail-1.png";
import hotelDetail2 from "@images/hotels/detail-2.png";
import hotelDetail3 from "@images/hotels/detail-3.png";
import hotelDetail4 from "@images/hotels/detail-4.png";
import Slider from "react-slick";

const settings = {
  dots: false,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function HotelDetailPage() {
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

  return (
    <>
      <div className="detail-container w-[calc(100%-40px)] pt-10 xl:pt-0">
        <Breadcrumb
          list={["Home", "Hotel list"]}
          last="Hotel details"
          className="mb-[18px]"
        />
        <h1 className="mb-4 text-[28px] font-bold leading-10 text-black25 dark:text-grayFD xl:mb-7 xl:text-5xl xl:leading-[70px]">
          Switzerland Hotels and Places to Stay
        </h1>
        <div className="mb-[30px] flex gap-[22px] xl:mb-11">
          <div className="flex items-center gap-[10px]">
            <YellowStarIcon />
            <p className="text-sm text-black45 dark:text-grayFD">
              4.8{" "}
              <span className="text-gray8B dark:text-grayC3">
                (122 reviews)
              </span>
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <AddressIcon className="text-gray8B" />
            <p className="text-sm text-gray8B dark:text-grayC3">
              Zuich town, Switzerland
            </p>
          </div>
        </div>
        <div className="mb-10 hidden gap-3 xl:flex">
          <Image
            src={hotelDetail1}
            alt="hotel-detail"
            width={742}
            height={632}
            className="rounded-l-3xl"
          />
          <div className="flex flex-col justify-between gap-3">
            <Image
              src={hotelDetail2}
              alt="hotel-detail"
              width={482}
              height={200}
              className="rounded-tr-3xl"
            />
            <Image
              src={hotelDetail3}
              alt="hotel-detail"
              width={482}
              height={200}
            />
            <Image
              src={hotelDetail4}
              alt="hotel-detail"
              width={482}
              height={200}
              className="rounded-br-3xl"
            />
          </div>
        </div>
        <Slider
          {...settings}
          className=" mb-[30px] block overflow-hidden xl:hidden"
        >
          {new Array(4).fill(0).map((_, index) => (
            <div key={index}>
              <Image
                src={hotelDetail1}
                alt="hotel-detail"
                width={0}
                height={435}
                className="h-[435px] w-full rounded-2xl"
              />
            </div>
          ))}
        </Slider>
        <div className="mb-5 inline-flex flex-wrap gap-4 xl:flex xl:items-center">
          <span className="flex h-[26px] items-center justify-center rounded bg-[rgba(56,_178,_69,_0.10)] px-1 text-sm text-green dark:bg-black44 dark:text-grayF6">
            5.0
          </span>
          <span className="flex h-[26px] items-center justify-center rounded bg-[rgba(253,_151,_4,_0.10)] px-2 text-sm text-orange04 dark:bg-black44 dark:text-grayF6">
            Perfect
          </span>
          <span className="flex h-[26px] items-center justify-center rounded bg-[#EAEEFA] px-4 text-sm text-blueA7 dark:bg-black44 dark:text-grayF6">
            Hotels
          </span>
          <span className="flex h-[26px] items-center justify-center rounded bg-[#FCEBF1] px-5 text-sm text-[#E96594] dark:bg-black44 dark:text-grayF6">
            Building
          </span>
          <span className="flex h-[26px] items-center justify-center rounded bg-[#FBEEE8] px-4 text-sm text-[#DC6E3D] dark:bg-black44 dark:text-grayF6">
            Top value
          </span>
          <div className="flex gap-2">
            <YellowStarIcon />
            <YellowStarIcon />
            <YellowStarIcon />
            <YellowStarIcon />
            <YellowHalfStar />
          </div>
        </div>
        <HotelDetailsContent />
      </div>
      <div className="hidden h-[2px] bg-grayF6 dark:bg-black29 xl:block"></div>
      <div className="mx-5 mb-[30px] max-w-[970px] xl:mx-auto xl:my-[70px] xl:mb-0">
        <h2 className="mb-5 text-[30px] font-bold leading-10 text-black2F dark:text-white xl:text-5xl xl:leading-[60px]">
          Select Room
        </h2>
        <div className="flex flex-col gap-4 xl:gap-[30px]">
          <RoomSuggest price={102} title="Economy Room, Annex Building" />
          <RoomSuggest price={102} title="Double Room" />
          <RoomSuggest price={201} title="Premium Bedroom" />
        </div>
      </div>
      <div className="mx-5 mb-[30px] max-w-[970px] xl:mx-auto xl:mb-[70px]">
        <div className="mb-6 flex items-center justify-between xl:mb-5">
          <h2 className="text-xl font-bold text-black33 dark:text-white xl:text-[34px] xl:leading-[44px]">
            Attach your Review
          </h2>
          <div className="flex items-center gap-2">
            <YellowStarIcon />
            <YellowStarIcon />
            <YellowStarIcon />
            <YellowStarIcon />
            <YellowEmptyStar className="text-orange42 dark:text-gray8B" />
          </div>
        </div>
        <form className="mb-[30px] xl:mb-[60px]">
          <Textarea
            placeholder="Write your detailed review here..."
            className="mb-5 h-[134px] w-full resize-none rounded-xl border-2 border-grayF3 bg-grayF6 px-[30px] py-6 text-base leading-6 dark:border-black29 dark:bg-black2D dark:text-grayF3 dark:placeholder:text-gray8B xl:text-lg xl:leading-none"
          />
          <div className="flex justify-end gap-5">
            <Button
              variant="secondary"
              className="h-[42px] w-[100px] rounded-[10px] border border-grayF3 bg-grayF6 text-base font-medium leading-7 text-gray8B dark:border-black44 dark:bg-black29"
            >
              Cancel
            </Button>
            <Button className="h-[42px] w-[100px] rounded-[10px] text-base font-medium leading-7">
              Submit
            </Button>
          </div>
        </form>
        <h3 className="mb-[30px] text-left font-semibold text-black33 dark:text-white xl:mb-9 xl:text-2xl xl:leading-8">
          Latest Reviews
        </h3>
        <div className="flex flex-col gap-4 xl:gap-[30px]">
          <LatestReview imageAuthor="/images/hotels/author-review.png" />
          <LatestReview imageAuthor="/images/hotels/author-review-2.png" />
          <LatestReview imageAuthor="/images/hotels/author-review-3.png" />
        </div>
        <Button
          className="mx-auto mt-10 flex h-[46px] w-full items-center justify-center gap-4 rounded-full border border-grayC3 p-0 shadow-none dark:border-black44 xl:w-[176px]"
          type="submit"
          variant="outline"
        >
          <CircleLoading className="text-[#353945] dark:text-grayC3" />
          <span className="font-medium leading-6 text-black dark:text-grayF6">
            View All
          </span>
        </Button>
      </div>
      <TrendingSection
        data={listTrending}
        className="!mb-[70px] w-[calc(100%-40px)]"
      />
      <FindSection />
    </>
  );
}
