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
    <div className="w-[446px] rounded-[30px] border-2 border-grayF6 px-9 py-7">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center">
          <h3 className="mr-[10px] text-[34px] font-bold leading-[44px] text-black">
            $450
          </h3>
          <span className="mr-1 text-2xl font-medium leading-9 text-grayC3">
            $570
          </span>
          <span className="text-lg text-grayC3">/day</span>
        </div>
        <span className="text-lg text-green71">Car is available</span>
      </div>
      <div className="mb-8 flex items-center gap-[10px]">
        <YellowStarIcon />
        <p className="text-sm text-black45">
          4.8 <span className="text-gray8B">(122 reviews)</span>
        </p>
      </div>
      <div className="mb-5 flex items-center justify-between border-b border-grayF4 pb-5">
        <p className="font-medium">Facilities</p>
        <ChevronRightIcon className="text-gray8B" />
      </div>
      <div className="mb-5 flex items-center justify-between border-b border-grayF4 pb-5">
        <p className="font-medium">Location</p>
        <ChevronRightIcon className="text-gray8B" />
      </div>
      <div className="mb-5 flex items-center justify-between pb-[30px]">
        <p className="font-medium">Date</p>
        <ChevronTopIcon className="text-gray8B" />
      </div>
      <div className="mb-[30px] flex gap-4 rounded-xl bg-grayF6 px-6 py-5">
        <CalendarIcon className="text-grayC3" />
        <div>
          <p className="font-medium">Date</p>
          <p className="font-medium leading-7 text-gray8B">
            May 15, 2021 - May 18.2021
          </p>
        </div>
      </div>
      <div className="mb-6 h-[1px] bg-grayEC"></div>
      <div className="mb-9 flex items-start justify-between">
        <div>
          <p className="mb-2 text-lg font-medium text-black45">Child seat</p>
          <span className="text-sm font-medium text-gray8B">$50</span>
        </div>
        <span className="rounded-lg bg-grayF6 px-8 py-1 font-medium leading-6 text-gray8B">
          1 seat
        </span>
      </div>
      <div>
        <h2 className="mb-3 text-2xl font-medium leading-9 text-black">
          Fare Summary
        </h2>
        <div className="mb-5 flex justify-between">
          <p className="font-medium leading-6 text-gray8B">$119 + 7nights</p>
          <p className="font-medium leading-6">$833</p>
        </div>
        <div className="mb-5 flex justify-between">
          <p className="font-medium leading-6 text-gray8B">
            10% compaign discount
          </p>
          <p className="font-medium leading-6">-$125</p>
        </div>
        <div className="mb-5 flex justify-between">
          <p className="font-medium leading-6 text-gray8B">Service free</p>
          <p className="font-medium leading-6">$103</p>
        </div>
        <div className="mb-3 flex justify-between">
          <p className="font-medium leading-6 text-gray8B">Service free</p>
          <p className="font-medium leading-6">$110</p>
        </div>
        <div className="mb-[30px] flex justify-between rounded-md bg-grayF6 px-6 py-2">
          <p className="font-medium leading-6">Total</p>
          <p className="font-medium leading-6">$833</p>
        </div>
        <p className="mb-9 text-center text-sm font-medium text-gray8B">
          Free cencellation untill 1:00 on may 15, 2021
        </p>
        <div className="flex justify-center">
          <Link
            href={"bookings/car-1"}
            className="rounded-full bg-blueE6 px-8 py-3 font-bold text-white"
          >
            Reserve this car
          </Link>
        </div>
      </div>
    </div>
  );
}
