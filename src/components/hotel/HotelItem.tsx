import Image from "next/image";
import {
  AddressIcon,
  CalendarIcon,
  FlagIcon,
  OfferIcon,
  ParkingIcon,
  PlaneIcon,
  SafetyIcon,
  WebsiteIcon,
  WifiCrossIcon,
  YellowStarIcon,
} from "@/components/icons";
import Link from "next/link";

interface HotelItemProps {
  hotel: Hotel;
}

export function HotelItem({ hotel }: HotelItemProps) {
  return (
    <div className="flex flex-col rounded-3xl border border-grayF3 dark:border-black44 xl:flex-row xl:gap-[30px] xl:rounded-xl">
      <Image
        src={hotel.image}
        alt="hotel"
        width={420}
        height={465}
        className="block w-full rounded-t-3xl xl:w-auto xl:rounded-l-xl xl:rounded-tr-none"
      />
      <div className="px-5 py-4 xl:px-0 xl:py-[30px] xl:pr-[26px]">
        <h2 className="mb-3 text-[34px] font-bold leading-[44px] text-black2F dark:text-white xl:mb-[22px] xl:text-[40px] xl:leading-[60px]">
          {hotel.title}
        </h2>
        <div className="mb-4 flex items-center justify-between xl:mb-11 xl:justify-start xl:gap-5">
          <div className="flex items-center gap-2 xl:gap-[10px]">
            <YellowStarIcon />
            <p className="text-sm font-medium dark:text-grayC3">
              {hotel.rating}
              <span className="text-sm font-medium text-gray8B dark:text-grayC3">
                ({hotel.totalRate} reviews)
              </span>
            </p>
          </div>
          <div className="flex gap-2 xl:gap-[10px]">
            <FlagIcon className="text-gray8B dark:text-grayC3" />
            <p className="text-sm text-gray8B dark:text-grayC3">
              {hotel.location}
            </p>
          </div>
        </div>
        <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-4 xl:mb-10">
          <div className="flex items-center gap-3">
            <AddressIcon className="text-gray8B dark:text-grayC3" />
            <span className="leading-6 text-black dark:text-grayFD">
              {hotel.plane}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CalendarIcon className="text-gray8B dark:text-grayC3" />
            <span className="leading-6 text-black dark:text-grayFD">
              {hotel.date}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <PlaneIcon className="text-gray8B dark:text-grayC3" />
            <span className="leading-6 text-black dark:text-grayFD">
              {hotel.plane}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 xl:flex-row xl:gap-0">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <WifiCrossIcon className="text-gray8B dark:text-grayC3" />
              <span className="text-sm dark:text-grayF3">Free Wifi</span>
            </div>
            <div className="flex items-center gap-4">
              <ParkingIcon className="text-gray8B dark:text-grayC3" />
              <span className="text-sm dark:text-grayF3">Free parking</span>
            </div>
            <div className="flex items-center gap-4">
              <OfferIcon className="text-gray8B dark:text-grayC3" />
              <span className="text-sm dark:text-grayF3">Special offer</span>
            </div>
            <div className="flex items-center gap-4">
              <WebsiteIcon className="text-gray8B dark:text-grayC3" />
              <span className="text-sm dark:text-grayF3">
                Visit hotel website
              </span>
            </div>
            <div className="flex items-center gap-4">
              <SafetyIcon className="text-gray8B dark:text-grayC3" />
              <span className="text-sm dark:text-grayF3">
                Taking safety measures
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 xl:gap-5">
            <p className="flex h-10 w-[140px] items-center justify-center gap-2 rounded-3xl bg-grayF6 py-1 dark:bg-black29 xl:h-auto xl:w-[176px]">
              <span className="text-base font-bold leading-6 dark:text-white xl:text-[28px] xl:leading-10">
                $320
              </span>
              <span className="font-medium text-gray8B dark:text-grayC3">
                For Two
              </span>
            </p>
            <Link
              href={"/hotels/1"}
              className="w-[140px] rounded-3xl bg-primary py-[10px] text-center text-base font-medium text-white shadow-[0px_5px_20px_0px_rgba(20,_92,_230,_0.14)] 
              xl:w-[176px] xl:text-xl xl:font-bold"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
