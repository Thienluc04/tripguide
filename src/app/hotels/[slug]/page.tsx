import { Breadcrumb, FindSection, TrendingSection } from '@/components/common';
import {
  HotelDetailsContent,
  LatestReview,
  RoomSuggest,
} from '@/components/hotel';
import {
  AddressIcon,
  CircleLoading,
  YellowEmptyStar,
  YellowHalfStar,
  YellowStarIcon,
} from '@/components/icons';
import { Button, Textarea } from '@/components/ui';
import { TrendItem } from '@/types/general';
import Image from 'next/image';

import hotelDetail1 from '@images/hotels/detail-1.png';
import hotelDetail2 from '@images/hotels/detail-2.png';
import hotelDetail3 from '@images/hotels/detail-3.png';
import hotelDetail4 from '@images/hotels/detail-4.png';

export default function HotelDetailPage() {
  const listTrending: TrendItem[] = [
    {
      image: '/images/hotels/trending-1.png',
      name: 'Hotel Sea Crown',
      rating: 4.8,
      totalReviews: 122,
    },
    {
      image: '/images/hotels/trending-2.png',
      name: 'Long Beach Hotel',
      rating: 4.8,
      totalReviews: 122,
    },
    {
      image: '/images/hotels/trending-3.png',
      name: 'Hotel The Cox Today',
      rating: 4.8,
      totalReviews: 122,
    },
    {
      image: '/images/hotels/trending-4.png',
      name: 'Vivanta Goa, Panaji',
      rating: 4.8,
      totalReviews: 122,
    },
  ];
  return (
    <>
      <div className="detail-container">
        <Breadcrumb
          list={['Home', 'Home list']}
          last="Home details"
          className="mb-[18px]"
        />
        <h1 className="text-5xl font-bold leading-[70px] text-black25 mb-7">
          Switzerland Hotels and Places to Stay
        </h1>
        <div className="flex gap-[22px] mb-11">
          <div className="flex gap-[10px] items-center">
            <YellowStarIcon />
            <p className="text-sm text-black45">
              4.8 <span className="text-gray8B">(122 reviews)</span>
            </p>
          </div>
          <div className="flex gap-[10px] items-center">
            <AddressIcon className="text-gray8B" />
            <p className="text-sm text-gray8B">Zuich town, Switzerland</p>
          </div>
        </div>
        <div className="flex gap-3 mb-10">
          <Image
            src={hotelDetail1}
            alt="hotel-detail"
            width={742}
            height={632}
            className="rounded-l-3xl"
          />
          <div className="flex flex-col gap-3 justify-between">
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
        <div className="flex gap-4 items-center mb-5">
          <span className="bg-[rgba(56,_178,_69,_0.10)] text-green text-sm px-1 h-[26px] rounded flex items-center justify-center">
            5.0
          </span>
          <span className="bg-[rgba(253,_151,_4,_0.10)] text-orange04 text-sm px-2 h-[26px] rounded flex items-center justify-center">
            Perfect
          </span>
          <span className="bg-[#EAEEFA] text-blueA7 text-sm px-4 h-[26px] rounded flex items-center justify-center">
            Hotels
          </span>
          <span className="bg-[#FCEBF1] text-[#E96594] text-sm px-5 h-[26px] rounded flex items-center justify-center">
            Building
          </span>
          <span className="bg-[#FBEEE8] text-[#DC6E3D] text-sm px-4 h-[26px] rounded flex items-center justify-center">
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
      <div className="h-[2px] bg-grayF6"></div>
      <div className="max-w-[970px] mx-auto my-[70px]">
        <h2 className="text-black2F text-5xl font-bold leading-[60px] mb-5">
          Select Room
        </h2>
        <div className="flex flex-col gap-[30px]">
          <RoomSuggest price={102} title="Economy Room, Annex Building" />
          <RoomSuggest price={102} title="Double Room" />
          <RoomSuggest price={201} title="Premium Bedroom" />
        </div>
      </div>
      <div className="max-w-[970px] mx-auto mb-[70px]">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-[34px] font-bold leading-[44px] text-black33">
            Attach your Review
          </h2>
          <div className="flex gap-2 items-center">
            <YellowStarIcon />
            <YellowStarIcon />
            <YellowStarIcon />
            <YellowStarIcon />
            <YellowEmptyStar />
          </div>
        </div>
        <form className="mb-[60px]">
          <Textarea
            placeholder="Write your detailed review here..."
            className="rounded-xl border-2 border-grayF3 bg-grayF6 h-[134px] w-full px-[30px] py-6 resize-none text-lg mb-5"
          />
          <div className="flex gap-5 justify-end">
            <Button
              variant="secondary"
              className="text-base border border-grayF3 bg-grayF6 text-gray8B font-medium leading-7 h-[42px] w-[100px] rounded-[10px]"
            >
              Cancel
            </Button>
            <Button className="text-base font-medium leading-7 h-[42px] w-[100px] rounded-[10px]">
              Submit
            </Button>
          </div>
        </form>
        <h3 className="text-2xl font-semibold leading-8 text-black33 mb-9">
          Latest Reviews
        </h3>
        <div className="flex flex-col gap-[30px]">
          <LatestReview imageAuthor="/images/hotels/author-review.png" />
          <LatestReview imageAuthor="/images/hotels/author-review-2.png" />
          <LatestReview imageAuthor="/images/hotels/author-review-3.png" />
        </div>
        <Button
          className="flex items-center justify-center gap-4 h-[46px] w-[176px] p-0 border border-grayC3 shadow-none rounded-full mt-10 mx-auto"
          type="submit"
          variant="outline"
        >
          <CircleLoading />
          <span className="text-black font-medium leading-6">View All</span>
        </Button>
      </div>
      <TrendingSection data={listTrending} className="!mb-[70px]" />
      <FindSection />
    </>
  );
}
