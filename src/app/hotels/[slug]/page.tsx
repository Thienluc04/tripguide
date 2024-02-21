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
      <div className="detail-container">
        <Breadcrumb
          list={["Home", "Hotel list"]}
          last="Hotel details"
          className="mb-[18px]"
        />
        <h1 className="mb-7 text-5xl font-bold leading-[70px] text-black25 dark:text-grayFD">
          Switzerland Hotels and Places to Stay
        </h1>
        <div className="mb-11 flex gap-[22px]">
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
        <div className="mb-10 flex gap-3">
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
        <div className="mb-5 flex items-center gap-4">
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
      <div className="h-[2px] bg-grayF6 dark:bg-black29"></div>
      <div className="mx-auto my-[70px] max-w-[970px]">
        <h2 className="mb-5 text-5xl font-bold leading-[60px] text-black2F dark:text-white">
          Select Room
        </h2>
        <div className="flex flex-col gap-[30px]">
          <RoomSuggest price={102} title="Economy Room, Annex Building" />
          <RoomSuggest price={102} title="Double Room" />
          <RoomSuggest price={201} title="Premium Bedroom" />
        </div>
      </div>
      <div className="mx-auto mb-[70px] max-w-[970px]">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-[34px] font-bold leading-[44px] text-black33 dark:text-white">
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
        <form className="mb-[60px]">
          <Textarea
            placeholder="Write your detailed review here..."
            className="dark:bg-black2D mb-5 h-[134px] w-full resize-none rounded-xl border-2 border-grayF3 bg-grayF6 px-[30px] py-6 text-lg dark:border-black29 dark:placeholder:text-gray8B"
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
        <h3 className="mb-9 text-2xl font-semibold leading-8 text-black33 dark:text-white">
          Latest Reviews
        </h3>
        <div className="flex flex-col gap-[30px]">
          <LatestReview imageAuthor="/images/hotels/author-review.png" />
          <LatestReview imageAuthor="/images/hotels/author-review-2.png" />
          <LatestReview imageAuthor="/images/hotels/author-review-3.png" />
        </div>
        <Button
          className="mx-auto mt-10 flex h-[46px] w-[176px] items-center justify-center gap-4 rounded-full border border-grayC3 p-0 shadow-none dark:border-black44"
          type="submit"
          variant="outline"
        >
          <CircleLoading className="text-[#353945] dark:text-grayC3" />
          <span className="font-medium leading-6 text-black dark:text-grayF6">
            View All
          </span>
        </Button>
      </div>
      <TrendingSection data={listTrending} className="!mb-[70px]" />
      <FindSection />
    </>
  );
}
