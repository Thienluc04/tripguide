"use client";

import {
  BookingDetailContent,
  BookingDetailSidebar,
} from "@/components/booking";
import { Breadcrumb } from "@/components/common";
import { BookingType } from "@/types/general";
import { getListDetailBooking } from "@/utils/general.util";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookingDetail() {
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

  return (
    <div className="container w-[calc(100%-40px)] pt-10 xl:pt-0">
      <Breadcrumb
        list={getListDetailBooking(bookingType)}
        last="Confirm and pay"
        className="mb-[30px] xl:mb-12"
      />
      <div className="flex flex-col items-center justify-between xl:flex-row xl:items-start">
        <BookingDetailContent />
        <BookingDetailSidebar bookingType={bookingType} />
      </div>
    </div>
  );
}
