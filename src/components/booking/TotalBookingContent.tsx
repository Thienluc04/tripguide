import Image from "next/image";
import totalItemImg from "@images/bookings/total-item.png";
import Link from "next/link";
import { Button } from "../ui";

interface TotalBookingContentProps {}

export function TotalBookingContent(props: TotalBookingContentProps) {
  return (
    <div className="mt-[30px]">
      <div className="mb-[30px] flex items-center justify-between rounded-[20px] bg-white px-7 py-5 shadow-[0px_32px_60px_-20px_rgba(54,_54,_54,_0.06)]">
        <div className="flex  gap-4">
          <Image src={totalItemImg} alt="total-item" />
          <div>
            <h3 className="text-2xl font-medium leading-9">
              Baan Wanglang Riverside
            </h3>
            <p className="w-[546px] text-xl leading-8 text-gray8B">
              342 Soi Wat Rakang, Prannok Rd, Siriral, Bankoknoi, Bangkok,
              Thailand
            </p>
          </div>
        </div>
        <p className="text-lg font-medium">Booked on April 8,2020</p>
      </div>
      <div className="flex items-center justify-between rounded-[20px] bg-white px-10 py-7 shadow-[0px_32px_60px_-20px_rgba(54,_54,_54,_0.06)]">
        <div className="flex gap-8">
          <div className="flex flex-col items-end gap-3">
            <p className="text-xl font-medium">Booking ID</p>
            <p className="text-xl font-bold text-gray8B">Check-in:</p>
            <p className="text-xl font-bold text-gray8B">Check-out:</p>
            <p className="text-xl font-bold text-gray8B">Room type:</p>
            <p className="text-xl font-bold text-gray8B">Number of Rooms</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xl font-medium">9246940</p>
            <p className="text-xl text-gray8B">April 8, 2020</p>
            <p className="text-xl text-gray8B">April 9, 2020</p>
            <p className="text-xl text-gray8B">
              Superior Double or Twin Room Only
            </p>
            <p className="text-xl text-gray8B">1</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mb-1 text-2xl font-medium leading-9 text-black">
            THB 1,950.00
          </h3>
          <div className="mb-[18px]">
            <Link href={""} className="text-[rgba(59,_113,_254,_0.80)]">
              Booking Conditions
            </Link>
          </div>
          <Button
            variant={"secondary"}
            className="mb-3 h-auto w-[290px] rounded-md bg-grayF6 px-0 py-2 text-center text-xl leading-8 text-black45"
          >
            Manage booking
          </Button>
          <Button
            variant={"primary"}
            className=" h-auto w-[290px] rounded-md bg-blueFE px-0 py-2 text-center text-xl font-bold leading-8 text-white"
          >
            Manage booking
          </Button>
        </div>
      </div>
    </div>
  );
}
