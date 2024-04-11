import { CalendarIcon, ChevronDownIcon } from "@/components/icons";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

interface BookingDetailsProps {}

export function BookingDetails(props: BookingDetailsProps) {
  return (
    <div className="mb-[30px] w-full rounded-[20px] border border-grayEA px-5 py-5 dark:border-black44 dark:bg-black29 xl:mb-0 xl:w-[408px] xl:px-[46px]">
      <div className="mb-5 flex items-center justify-between border-b border-b-grayEC pb-4 dark:border-b-black44">
        <div className="flex gap-[10px]">
          <h2 className="text-[28px] font-bold leading-[44px] text-black dark:text-grayFD xl:text-[34px]">
            $142{" "}
            <span className="text-xl font-normal leading-8 text-gray8B dark:text-grayF3">
              /night
            </span>
          </h2>
          <p className="pt-[14px] text-lg text-grayC3 dark:text-grayF3">$184</p>
        </div>
        <div className="inline rounded-3xl bg-primary px-[10px] py-[6px] text-sm font-medium text-white">
          20% OFF
        </div>
      </div>
      <form>
        <div className="mb-5 flex gap-[14px]">
          <div className="flex-1">
            <h3 className="mb-3 font-medium leading-6 text-gray8B dark:text-grayFD">
              Check-In
            </h3>
            <div className="flex gap-[10px] rounded-[10px] bg-grayF6 px-4 py-3 dark:bg-black44">
              <CalendarIcon className="text-gray90 dark:text-grayC3" />
              <span className="text-sm text-black45 dark:text-grayF3">
                May 15, 2021{" "}
              </span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="mb-3 font-medium leading-6 text-gray8B dark:text-grayFD">
              Check-Out
            </h3>
            <div className="flex gap-[10px] rounded-[10px] bg-grayF6 px-4 py-3 dark:bg-black44">
              <CalendarIcon className="text-gray90 dark:text-grayC3" />
              <span className="text-black4 text-sm dark:text-grayF3">
                May 22, 2021{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h3 className="mb-3 font-medium leading-6 text-gray90 dark:text-grayFD">
            Guest
          </h3>
          <div className="flex items-center justify-between rounded-[10px] bg-grayF6 px-4 py-3 text-black45 dark:bg-black44">
            <span className="text-sm dark:text-grayF3">
              2 Adults, 1 Children
            </span>
            <ChevronDownIcon className="text-black45 dark:text-grayF3" />
          </div>
        </div>
        <div className="mb-6">
          <h3 className="mb-2 font-medium leading-6 text-gray90 dark:text-grayFD">
            Extra Features
          </h3>
          <div className="mb-1 flex items-center justify-between">
            <Checkbox label="Allow to bring pet" className="border-gray8B" />
            <span className="text-sm font-medium leading-7 text-grayC3 dark:text-grayC3">
              $13
            </span>
          </div>
          <div className="mb-1 flex items-center justify-between">
            <Checkbox
              label="Breakfast a day per person"
              className="border-gray8B"
            />
            <span className="text-sm font-medium leading-7 dark:text-grayF3">
              $10
            </span>
          </div>
          <div className="mb-1 flex items-center justify-between">
            <Checkbox label="Parking a day" className="border-gray8B" />
            <span className="text-sm font-medium leading-7 text-grayC3 dark:text-grayC3">
              $6
            </span>
          </div>
          <div className="flex items-center justify-between">
            <Checkbox label="Extra pillow" className="border-gray8B" />
            <span className="text-sm font-medium leading-7 text-grayC3 dark:text-grayC3">
              Free
            </span>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-medium leading-6 text-gray90 dark:text-grayF6">
            Price
          </h3>
          <div className="mb-3 flex-col gap-2 rounded-[10px] bg-grayF6 px-5 py-3 dark:bg-black44">
            <div className="flex items-center justify-between dark:text-grayF3">
              <span className="text-sm">1 Nights</span>
              <span className="text-sm leading-7">$500</span>
            </div>
            <div className="flex items-center justify-between dark:text-grayF3">
              <span className="text-sm">Discount 20%</span>
              <span className="text-sm leading-7">$200</span>
            </div>
            <div className="flex items-center justify-between dark:text-grayF3">
              <span className="text-sm">Breakfast a day per person</span>
              <span className="text-sm leading-7">$10</span>
            </div>
            <div className="flex items-center justify-between dark:text-grayF3">
              <span className="text-sm">Service fee</span>
              <span className="text-sm leading-7">$5</span>
            </div>
          </div>
          <div className="mb-5 flex items-center justify-between">
            <p className="font-medium leading-6 text-gray90 dark:text-grayF6">
              Total payment
            </p>
            <p className="font-medium leading-7 text-black45 dark:text-grayF3">
              $300
            </p>
          </div>
          <Link
            href={"/bookings/hotel-1"}
            className="mb-3 flex h-12 items-center justify-center rounded-xl bg-primary text-xl font-bold text-white"
          >
            Book Now
          </Link>
          <p className="text-center text-sm text-gray90">
            You will not get charged yet
          </p>
        </div>
      </form>
    </div>
  );
}
