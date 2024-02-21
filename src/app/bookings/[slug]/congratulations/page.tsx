"use client";

import { Breadcrumb } from "@/components/common";
import {
  CalendarIcon,
  LaptopIcon,
  TotalIcon,
  WalletIcon,
  YellowStarIcon,
} from "@/components/icons";
import { BookingType } from "@/types/general";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import planeTrip from "@images/flights/plane-trip.png";
import planeDetail from "@images/flights/plane-detail.png";
import hotelBooked from "@images/hotels/booked.png";
import congratulationCar from "@images/cars/congratulation-car.png";

export default function HotelCongratulations() {
  const [bookingType, setBookingType] = useState<BookingType>("");

  const { slug } = useParams();

  useEffect(() => {
    if (slug.includes("hotel")) {
      setBookingType("hotel");
    }
    if (slug.includes("flight")) {
      setBookingType("flight");
    }
    if (slug.includes("car")) {
      setBookingType("car");
    }
  }, [slug]);

  if (!bookingType) return null;
  return (
    <div className="container">
      <Breadcrumb
        list={[
          "Home",
          bookingType === "hotel"
            ? "Hotel list"
            : bookingType === "car"
              ? "Car List"
              : "Flight list",
          bookingType === "hotel"
            ? "Hotel Details"
            : bookingType === "car"
              ? "Car Details"
              : "Flight Details",
          "Confirm and pay",
        ]}
        last="Congratulations"
        className="mb-[70px]"
      />
      <h2 className="mb-5 text-2xl font-bold dark:text-grayC3">
        Congratulations!
      </h2>
      <h1 className="mb-6 text-5xl font-medium leading-[60px] dark:text-grayFD">
        Your trip has been booked!
      </h1>
      <div className="mb-9 h-[1px] w-[822px] bg-grayF3 dark:bg-black44"></div>
      <h2 className="mb-7 text-[34px] font-bold leading-[44px] text-black2F dark:text-grayF6">
        {bookingType === "flight" ? (
          <div className="flex items-center gap-5">
            <span>AKL</span>
            <Image src={planeTrip} alt="plane-trip" width={218} height={50} />
            <span>SGN</span>
          </div>
        ) : (
          "Switzerland Hotels and Places to Stay"
        )}
      </h2>
      <div className="mb-[30px] flex items-end justify-between">
        <div className="w-[380px]">
          <div className="mb-6 flex items-center gap-9">
            <div className="flex gap-2">
              <YellowStarIcon />
              <p className="text-sm font-medium text-black45 dark:text-grayC3">
                4.8 <span className="text-gray90">(122 reviews)</span>
              </p>
            </div>
            <p className="text-sm font-medium text-black45 dark:text-grayC3">
              {bookingType !== "hotel"
                ? "1 Baggoge  +  Meals"
                : "1 bad room + Private room"}
            </p>
          </div>
          <div className="mb-6 h-[1px] w-full bg-grayF4 dark:bg-black44"></div>
          <div className="mb-[30px] flex gap-6">
            <div className="flex-1 rounded-xl bg-grayF6 px-5 py-2 pb-3 dark:bg-black29">
              <h3 className="text-sm font-medium text-black45 dark:text-grayFD">
                Dates
              </h3>
              <p className="font-medium leading-6 text-gray8B">
                May 15 - 22, 2021
              </p>
            </div>
            <div className="flex-1 rounded-xl bg-grayF6 px-5 py-2 pb-3 dark:bg-black29">
              <h3 className="text-sm font-medium text-black45 dark:text-grayFD">
                Travelers
              </h3>
              <p className="font-medium leading-6 text-gray8B">1 Passenger</p>
            </div>
          </div>
          <div className="rounded-[10px] border border-grayEF bg-gray4F6 px-6 py-5 dark:border-black29 dark:bg-black29">
            <h2 className="mb-6 text-[28px] font-bold leading-10 text-black2F dark:text-grayFD">
              Reserve details
            </h2>
            <div className="mb-[22px] flex items-center justify-between">
              <div className="flex items-center gap-3 text-gray90 dark:text-grayF3">
                <LaptopIcon />
                <span className="font-medium leading-6">Booking code</span>
              </div>
              <p className="font-medium leading-6 text-black45 dark:text-gray8B">
                FD_158456
              </p>
            </div>
            <div className="mb-[22px] flex items-center justify-between">
              <div className="flex items-center gap-3 text-gray90 dark:text-grayF3">
                <CalendarIcon />
                <span className="font-medium leading-6">Date</span>
              </div>
              <p className="font-medium leading-6 text-black45 dark:text-gray8B">
                30 Apr, 2021
              </p>
            </div>
            <div className="mb-[22px] flex items-center justify-between">
              <div className="flex items-center gap-3 text-gray90 dark:text-grayF3">
                <TotalIcon />
                <span className="font-medium leading-6">Total</span>
              </div>
              <p className="font-medium leading-6 text-black45 dark:text-gray8B">
                $833
              </p>
            </div>
            <div className="mb-[22px] flex items-center justify-between">
              <div className="flex items-center gap-3 text-gray90 dark:text-grayF3">
                <WalletIcon />
                <span className="font-medium leading-6">Payment method</span>
              </div>
              <p className="font-medium leading-6 text-black45 dark:text-gray8B">
                Credit card
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={
              bookingType === "flight"
                ? planeDetail
                : bookingType === "car"
                  ? congratulationCar
                  : hotelBooked
            }
            alt="book-img"
            width={670}
            height={403}
            className="rounded-[20px]"
          />
        </div>
      </div>
      <Link
        href="/"
        className="flex h-12 w-[205px] items-center justify-center rounded-[34px] bg-blueFE font-bold text-white"
      >
        Go To Your Home
      </Link>
    </div>
  );
}
