import { TickIcon } from "@/components/icons";
import Link from "next/link";

interface RoomSuggestProps {
  title: string;
  price: number;
}

export function RoomSuggest({ title, price }: RoomSuggestProps) {
  return (
    <div className="flex flex-col rounded-[10px] border border-grayF3 px-5 py-5 dark:border-black29 dark:bg-black29 xl:flex-row xl:justify-between xl:px-[30px]">
      <div className="mb-3 xl:mb-0">
        <h3 className="mb-5 text-lg font-medium text-black29 dark:text-grayFD xl:mb-4 xl:text-2xl xl:leading-9">
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
      <div className="flex flex-col items-start xl:items-end">
        <p className="text-xl font-medium leading-7 text-black dark:text-grayFD xl:mb-4 xl:text-[34px] xl:font-bold xl:leading-[44px]">
          ${price}{" "}
          <span className="text-sm font-normal text-gray8B dark:text-grayC3 xl:text-xl xl:leading-8">
            /night
          </span>
        </p>
        <p className="text-sm font-medium text-orange xl:text-lg">Save $4</p>
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
