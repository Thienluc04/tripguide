import Image from "next/image";
import Link from "next/link";
import { FlightTime } from ".";
import { ArrowLeftLong, ArrowRightLong } from "../icons";

import emirates from "@images/flights/emirates.png";

interface FlightTripProps {
  type: "trip" | "trip-return";
}

export function FlightTrip({ type }: FlightTripProps) {
  return (
    <>
      <h3 className="mb-3 flex flex-col items-center gap-2 text-lg font-medium dark:text-grayF6 xl:flex-row">
        Dhaka
        {type === "trip" && (
          <ArrowRightLong className="text-gray8B dark:text-grayF3" />
        )}
        {type === "trip-return" && (
          <ArrowLeftLong className="text-gray8B dark:text-grayF3" />
        )}
        Dubai Thu, 19 Aug
      </h3>
      <div className="flex flex-col items-center gap-4 xl:flex-row xl:gap-[50px]">
        <Image src={emirates} alt="amirates" width={52} height={35} />
        <div>
          <p className="mb-1 text-2xl font-medium leading-9 text-black2F dark:text-grayFD">
            DAC
          </p>
          <span className="text-sm font-medium text-gray90 dark:text-grayC3">
            08:45 AM
          </span>
        </div>
        <FlightTime />
        <div>
          <p className="mb-1 text-2xl font-medium leading-9 text-black2F dark:text-grayFD">
            DXB
          </p>
          <span className="text-sm font-medium text-gray90 dark:text-grayC3">
            01:05 PM
          </span>
        </div>
        <div>
          <p className="text-center text-2xl font-medium leading-9 text-black2F dark:text-grayFD">
            $350
          </p>
          <Link
            href={"/flights/1"}
            className="mt-3 block w-[120px] rounded-3xl bg-blueFE py-2 text-center text-sm font-bold text-white xl:mt-0"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
