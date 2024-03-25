import Image from "next/image";
import totalItemImg from "@images/bookings/total-item.png";
import Link from "next/link";
import { Button } from "../ui";

interface TotalBookingContentProps {}

export function TotalBookingContent(props: TotalBookingContentProps) {
  return (
    <div className="mt-6 xl:mt-[30px]">
      <div className="mb-6 flex flex-col items-center justify-between rounded-[20px] bg-white p-3 shadow-[0px_32px_60px_-20px_rgba(54,_54,_54,_0.06)] dark:bg-black29 xl:mb-[30px] xl:flex-row xl:px-7 xl:py-5">
        <div className="flex gap-3 xl:gap-4">
          <Image src={totalItemImg} alt="total-item" />
          <div className="flex-1">
            <p className="mb-2 block text-xs font-medium text-gray8B xl:hidden">
              Booked on April 8,2020
            </p>
            <h3 className="mb-2 text-sm font-medium leading-5 dark:text-grayF3 xl:mb-0 xl:text-2xl xl:leading-9">
              Baan Wanglang Riverside
            </h3>
            <p className="text-xs text-gray8B xl:w-[546px] xl:text-xl xl:leading-8">
              342 Soi Wat Rakang, Prannok Rd, Siriral, Bankoknoi, Bangkok,
              Thailand
            </p>
          </div>
        </div>
        <p className="hidden text-lg font-medium dark:text-grayC3 xl:inline-block">
          Booked on April 8,2020
        </p>
      </div>
      <div className="flex flex-col items-center justify-between rounded-[20px] shadow-[0px_32px_60px_-20px_rgba(54,_54,_54,_0.06)] dark:bg-black29 xl:flex-row xl:bg-white xl:px-10 xl:py-7">
        <div className="mb-10 flex justify-center gap-8 xl:mb-0 xl:justify-start">
          <div className="flex flex-1 flex-col items-end gap-3 xl:flex-none">
            <p className="text-base font-medium dark:text-grayF3 xl:text-xl">
              Booking ID
            </p>
            <p className="text-base font-bold text-gray8B xl:text-xl">
              Check-in:
            </p>
            <p className="text-base font-bold text-gray8B xl:text-xl">
              Check-out:
            </p>
            <p className="text-base font-bold text-gray8B xl:text-xl">
              Room type:
            </p>
            <p className="mt-auto text-base font-bold text-gray8B xl:mt-0 xl:text-xl">
              Number of Rooms
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-3 xl:flex-none">
            <p className="text-base font-medium dark:text-grayF3 xl:text-xl">
              9246940
            </p>
            <p className="text-base text-gray8B xl:text-xl">April 8, 2020</p>
            <p className="text-base text-gray8B xl:text-xl">April 9, 2020</p>
            <p className="text-base text-gray8B xl:text-xl">
              Superior Double or Twin Room Only
            </p>
            <p className="text-xl text-gray8B">1</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mb-1 text-2xl font-medium leading-9 text-black dark:text-grayF3">
            THB 1,950.00
          </h3>
          <div className="mb-[18px]">
            <Link href={""} className="text-[rgba(59,_113,_254,_0.80)]">
              Booking Conditions
            </Link>
          </div>
          <Button
            variant={"secondary"}
            className="mb-3 h-auto w-[290px] rounded-md bg-grayF6 px-0 py-2 text-center text-xl leading-8 text-black45 dark:bg-black44 dark:text-grayF3"
          >
            Manage booking
          </Button>
          <Button
            variant={"primary"}
            className=" h-auto w-[290px] rounded-md bg-blueFE px-0 py-2 text-center text-xl font-bold leading-8 text-white"
          >
            Book Again
          </Button>
        </div>
      </div>
    </div>
  );
}
