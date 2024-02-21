import { TickIcon } from "@/components/icons";
import Link from "next/link";

interface RoomSuggestProps {
  title: string;
  price: number;
}

export function RoomSuggest({ title, price }: RoomSuggestProps) {
  return (
    <div className="flex justify-between rounded-[10px] border border-grayF3 px-[30px] py-5 dark:border-black29 dark:bg-black29">
      <div>
        <h3 className="mb-4 text-2xl font-medium leading-9 text-black29 dark:text-grayFD">
          {title}
        </h3>
        <p className="mb-4 text-sm text-gray8B">Offer conditions:</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <TickIcon className="text-green82" />
            <span className="text-sm dark:text-grayC3">Non-refundable</span>
          </div>
          <div className="flex items-center gap-2">
            <TickIcon className="text-green82" />
            <span className="text-sm dark:text-grayC3">Free Wifi</span>
          </div>
          <div className="flex items-center gap-2">
            <TickIcon className="text-green82" />
            <span className="text-sm dark:text-grayC3">
              Breakfast for 2 people
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="mb-4 text-[34px] font-bold leading-[44px] text-black dark:text-grayFD">
          ${price}{" "}
          <span className="text-xl font-normal leading-8 text-gray8B dark:text-grayC3">
            /night
          </span>
        </p>
        <p className="text-lg font-medium text-orange">Save $4</p>
        <p className="mb-5 text-xs leading-[18px] text-gray8B">
          on TripGuide.com $106
        </p>
        <Link
          href={"/"}
          className="inline-block rounded-md bg-primary px-4 py-2 text-lg font-medium text-white"
        >
          Select
        </Link>
      </div>
    </div>
  );
}
