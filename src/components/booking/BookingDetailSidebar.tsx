import { YellowStarIcon } from "@/components/icons";
import { BookingType } from "@/types/general";
import Image from "next/image";
import Link from "next/link";

import planeTrip from "@images/flights/plane-trip.png";
import planeDetail from "@images/flights/plane-detail.png";
import payment from "@images/hotels/payment.png";
import bookingCar from "@images/cars/booking-img.png";
import { cn } from "@/lib/utils";

interface BookingDetailSidebarProps {
  bookingType?: BookingType;
}

export function BookingDetailSidebar({
  bookingType = "hotel",
}: BookingDetailSidebarProps) {
  return (
    <div className="w-[444px] rounded-[20px] border-2 border-grayF3 bg-white px-9 py-10 dark:border-black44 dark:bg-black29">
      {bookingType === "hotel" && (
        <h2 className="mb-[14px] text-lg font-medium text-black dark:text-grayFD">
          Switzerland Hotels and Places to Stay
        </h2>
      )}
      {bookingType === "flight" && (
        <div className="mb-[14px] flex items-center gap-5">
          <p className="text-xl font-bold text-black44 dark:text-grayF3">AKL</p>
          <Image src={planeTrip} alt="plane-trip" width={130} height={20} />
          <p className="text-xl font-bold text-black44 dark:text-grayF3">SGN</p>
        </div>
      )}
      {bookingType === "car" && (
        <h2 className="mb-1 text-2xl font-medium leading-9 text-black">
          Best Saller BMW i10 - 2021
        </h2>
      )}
      <div className="mb-6 flex items-center gap-[10px]">
        <YellowStarIcon />
        <p className="text-sm font-medium text-black29 dark:text-white">
          4.8{" "}
          <span className="text-gray8B dark:text-grayC3">(122 reviews)</span>
        </p>
      </div>
      <div className="mb-8">
        <Image
          src={
            bookingType === "flight"
              ? planeDetail
              : bookingType === "car"
                ? bookingCar
                : payment
          }
          className="rounded-xl"
          alt="booking"
          width={326}
          height={177}
        />
      </div>
      <div className="inline-block">
        <p
          className={cn(
            "mb-4 font-medium leading-6 text-gray8B dark:text-grayFD",
            bookingType === "car" && "text-black44",
          )}
        >
          {bookingType === "flight"
            ? "1 Baggoge  +  Meals"
            : bookingType === "car"
              ? "1 suitcase  +  Air conditionar"
              : "1 bedroom + 1 private room"}
        </p>
        <div className="mb-5 h-[1px] w-[170px] bg-grayEE dark:bg-black44"></div>
      </div>
      <div className="mb-5 flex">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-grayC3 dark:text-grayF6">
            Check in
          </h3>
          <p className="font-medium leading-6 text-gray8B dark:text-gray90">
            June 27, 2020
          </p>
        </div>
        <div className="h-12 w-[2px] bg-grayF6 dark:bg-black29"></div>
        <div className="ml-[14px] flex-1">
          <h3 className="text-sm font-medium text-grayC3 dark:text-grayF6">
            Check out
          </h3>
          <p className="font-medium leading-6 text-gray8B dark:text-gray90">
            June 30, 2020
          </p>
        </div>
      </div>
      <div className="mb-10">
        <h3 className="text-sm font-medium text-grayC3 dark:text-grayF6">
          {bookingType === "car" ? "Travelers" : "Guest"}
        </h3>
        <p className="font-medium leading-6 text-gray8B dark:text-grayC3">
          2 {bookingType === "car" ? "Passengers" : "Guests"}
        </p>
      </div>
      <div className="mb-[30px]">
        <h2 className="mb-10 font-Roboto text-[26px] font-medium leading-7 text-black33 dark:text-white">
          {bookingType === "car" ? "Fare summary" : "Booked details"}
        </h2>
        <div className="mb-3 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <p className="font-medium leading-6 text-gray8B dark:text-grayF3">
              $119 + 5nights
            </p>
            <p className="font-medium leading-6 text-black45 dark:text-grayF3">
              $833
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-medium leading-6 text-gray8B dark:text-grayF3">
              Ocupancy text and fee
            </p>
            <p className="font-medium leading-6 text-black45 dark:text-grayF3">
              -$125
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-medium leading-6 text-gray8B dark:text-grayF3">
              Service free
            </p>
            <p className="font-medium leading-6 text-black45 dark:text-grayF3">
              $103
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-md bg-grayF6 px-3 py-2 dark:bg-black44">
          <p className="font-medium leading-6 text-black2F dark:text-grayFD">
            Total
          </p>
          <p className="font-medium leading-6 text-black45 dark:text-grayF6">
            $833
          </p>
        </div>
      </div>
      <Link
        href={""}
        className="block text-center text-sm font-medium text-grayC3"
      >
        Report this property
      </Link>
    </div>
  );
}
