import {
  CalendarIcon,
  ChevronRightIcon,
  ChevronTopIcon,
  YellowStarIcon,
} from "@/components/icons";
import Link from "next/link";

interface SidebarCarDetailProps {}

export function SidebarCarDetail(props: SidebarCarDetailProps) {
  return (
    <div className="mt-[30px] rounded-[30px] border-2 border-grayF6 px-6 py-5 dark:border-black44 dark:bg-black29 xl:mt-0 xl:w-[446px] xl:px-9 xl:py-7">
      <div className="mb-4 flex items-center justify-between xl:mb-3">
        <div className="flex items-center">
          <h3 className="mr-[10px] text-2xl font-bold leading-[34px] text-black dark:text-grayFD xl:text-[34px] xl:leading-[44px]">
            $450
          </h3>
          <span className="mr-1 text-lg font-medium leading-7 text-grayC3 xl:text-2xl xl:leading-9">
            $570
          </span>
          <span className="text-lg leading-7 text-grayC3 xl:leading-none">
            /day
          </span>
        </div>
        <span className="text-sm text-green71 xl:text-lg">
          Car is available
        </span>
      </div>
      <div className="mb-8 flex items-center gap-[10px]">
        <YellowStarIcon />
        <p className="text-sm text-black45 dark:text-grayF3">
          4.8 <span className="text-gray8B">(122 reviews)</span>
        </p>
      </div>
      <div className="mb-5 flex items-center justify-between border-b border-grayF4 pb-5 dark:border-black44">
        <p className="font-medium dark:text-grayFD">Facilities</p>
        <ChevronRightIcon className="text-gray8B" />
      </div>
      <div className="mb-5 flex items-center justify-between border-b border-grayF4 pb-5 dark:border-black44">
        <p className="font-medium dark:text-grayFD">Location</p>
        <ChevronRightIcon className="text-gray8B" />
      </div>
      <div className="mb-5 flex items-center justify-between pb-[30px]">
        <p className="font-medium dark:text-grayFD">Date</p>
        <ChevronTopIcon className="text-gray8B" />
      </div>
      <div className="mb-[30px] flex gap-4 rounded-xl bg-grayF6 px-6 py-5 dark:bg-black44">
        <CalendarIcon className="text-grayC3" />
        <div>
          <p className="font-medium dark:text-grayFD">Date</p>
          <p className="font-medium leading-7 text-gray8B dark:text-grayC3">
            May 15, 2021 - May 18.2021
          </p>
        </div>
      </div>
      <div className="mb-6 h-[1px] bg-grayEC dark:bg-black44"></div>
      <div className="mb-9 flex items-start justify-between">
        <div>
          <p className="mb-2 text-lg font-medium text-black45 dark:text-grayF6">
            Child seat
          </p>
          <span className="text-sm font-medium text-gray8B dark:text-grayF3">
            $50
          </span>
        </div>
        <span className="rounded-lg bg-grayF6 px-8 py-1 font-medium leading-6 text-gray8B dark:bg-black44 dark:text-gray8B">
          1 seat
        </span>
      </div>
      <div>
        <h2 className="mb-3 text-2xl font-medium leading-9 text-black dark:text-grayFD">
          Fare Summary
        </h2>
        <div className="mb-5 flex justify-between">
          <p className="font-medium leading-6 text-gray8B dark:text-grayC3">
            $119 + 7nights
          </p>
          <p className="font-medium leading-6 dark:text-grayFD">$833</p>
        </div>
        <div className="mb-5 flex justify-between">
          <p className="font-medium leading-6 text-gray8B dark:text-grayC3">
            10% compaign discount
          </p>
          <p className="font-medium leading-6 dark:text-grayFD">-$125</p>
        </div>
        <div className="mb-5 flex justify-between">
          <p className="font-medium leading-6 text-gray8B dark:text-grayC3">
            Service free
          </p>
          <p className="font-medium leading-6 dark:text-grayFD">$103</p>
        </div>
        <div className="mb-3 flex justify-between">
          <p className="font-medium leading-6 text-gray8B dark:text-grayC3">
            Service free
          </p>
          <p className="font-medium leading-6 dark:text-grayFD">$110</p>
        </div>
        <div className="mb-[30px] flex justify-between rounded-md bg-grayF6 px-6 py-2 dark:bg-black44 dark:text-grayFD">
          <p className="font-medium leading-6">Total</p>
          <p className="font-medium leading-6">$833</p>
        </div>
        <p className="mb-9 text-center text-sm font-medium text-gray8B dark:text-grayC3">
          Free cencellation untill 1:00 on may 15, 2021
        </p>
        <div className="flex justify-center">
          <Link
            href={"/bookings/car-1"}
            className="rounded-full bg-blueE6 px-8 py-3 font-bold text-white"
          >
            Reserve this car
          </Link>
        </div>
      </div>
    </div>
  );
}
