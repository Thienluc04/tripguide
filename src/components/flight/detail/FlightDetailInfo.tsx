import Image from "next/image";

import emirates from "@images/flights/emirates.png";
import planeTrip from "@images/flights/plane-trip.png";

interface FlightDetailInfoProps {}

export function FlightDetailInfo(props: FlightDetailInfoProps) {
  return (
    <div className="rounded-[20px] border border-grayF3 bg-white p-10 dark:border-black29 dark:bg-black29">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="mb-2 text-2xl font-medium leading-9 text-black29 dark:text-white">
            Dhaka To Dubai
          </h2>
          <p className="text-sm font-medium text-gray8B dark:text-grayC3">
            Non stop | 2 hrs 20 mins | Economy | Thu 27 Jul 2020
          </p>
        </div>
        <div className="rounded-lg bg-orange54 bg-opacity-20 px-[22px] py-[10px] font-medium leading-6 text-orange54">
          Change Flight
        </div>
      </div>
      <div className="mb-[30px] h-[1px] bg-grayF3 dark:bg-black44"></div>
      <div className="mb-10 flex items-center gap-[50px]">
        <div className="flex items-center gap-5">
          <Image src={emirates} alt="emirates" width={50} height={34} />
          <div>
            <h3 className="mb-[10px] text-lg font-medium dark:text-grayFD">
              IndiGo
            </h3>
            <p className="text-lg text-gray8B dark:text-grayC3">GE-965 320</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-medium leading-9 dark:text-grayFD">
            08.45
          </h3>
          <p className="mb-1 text-sm font-medium text-gray8B dark:text-grayC3">
            Thu, 27 July 2020
          </p>
          <p className="text-sm font-medium text-gray8B dark:text-grayC3">
            Dhaka zia internationa airport, Bangladesh
          </p>
        </div>
        <div>
          <p className="font-medium leading-6 text-gray8B dark:text-grayC3">
            05 hrs 20 mins
          </p>
          <Image src={planeTrip} alt="plane-trip" width={130} height={22} />
        </div>
        <div>
          <h3 className="text-2xl font-medium leading-9 dark:text-grayFD">
            01.05
          </h3>
          <p className="mb-1 text-sm text-gray8B dark:text-grayC3">
            Sat, 30 July 2020
          </p>
          <p className="mb-1 text-sm text-gray8B dark:text-grayC3">Dubai</p>
          <p className="text-sm text-gray8B dark:text-grayC3">
            Dubai International Airport
          </p>
        </div>
      </div>
      <div className="mb-10 flex gap-12">
        <div>
          <p className="mb-2 font-medium leading-6 dark:text-grayFD">
            Baggoge:
          </p>
          <span className="font-medium leading-6 text-gray8B dark:text-grayC3">
            Adult
          </span>
        </div>
        <div>
          <p className="mb-2 font-medium leading-6 dark:text-grayFD">
            Check-In
          </p>
          <span className="font-medium leading-6 text-gray8B dark:text-grayC3">
            20Kgs
          </span>
        </div>
        <div>
          <p className="mb-2 font-medium leading-6 dark:text-grayFD">Cabin</p>
          <span className="font-medium leading-6 text-gray8B dark:text-grayC3">
            7 kg
          </span>
        </div>
        <div>
          <p className="mb-2 font-medium leading-6 dark:text-grayFD">Meals</p>
          <span className="font-medium leading-6 text-gray8B dark:text-grayC3">
            Meals Not Available
          </span>
        </div>
      </div>
      <div className="mb-10 h-[1px] bg-grayF3 dark:bg-black44"></div>
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="mb-2 text-2xl font-medium leading-9 text-black29 dark:text-grayFD">
            Dhaka To Dubai
          </h2>
          <p className="text-sm font-medium text-gray8B dark:text-grayC3">
            Non stop | 2 hrs 20 mins | Economy | Thu 27 Jul 2020
          </p>
        </div>
      </div>
      <div className="mb-10 flex items-center gap-[50px]">
        <div className="flex items-center gap-5">
          <Image src={emirates} alt="emirates" width={50} height={34} />
          <div>
            <h3 className="mb-[10px] text-lg font-medium dark:text-grayFD">
              IndiGo
            </h3>
            <p className="text-lg text-gray8B dark:text-grayC3">GE-965 320</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-medium leading-9 dark:text-grayFD">
            08.45
          </h3>
          <p className="mb-1 text-sm font-medium text-gray8B dark:text-grayC3">
            Thu, 27 July 2020
          </p>
          <p className="text-sm font-medium text-gray8B dark:text-grayC3">
            Dhaka zia internationa airport, Bangladesh
          </p>
        </div>
        <div>
          <p className="font-medium leading-6 text-gray8B dark:text-grayC3">
            05 hrs 20 mins
          </p>
          <Image src={planeTrip} alt="plane-trip" width={130} height={22} />
        </div>
        <div>
          <h3 className="text-2xl font-medium leading-9 dark:text-grayFD">
            01.05
          </h3>
          <p className="mb-1 text-sm text-gray8B dark:text-grayC3">
            Sat, 30 July 2020
          </p>
          <p className="mb-1 text-sm text-gray8B dark:text-grayC3">Dubai</p>
          <p className="text-sm text-gray8B dark:text-grayC3">
            Dubai International Airport
          </p>
        </div>
      </div>
      <div className="flex gap-12">
        <div>
          <p className="mb-2 font-medium leading-6 dark:text-grayFD">
            Baggoge:
          </p>
          <span className="font-medium leading-6 text-gray8B dark:text-grayC3">
            Adult
          </span>
        </div>
        <div>
          <p className="mb-2 font-medium leading-6 dark:text-grayFD">
            Check-In
          </p>
          <span className="font-medium leading-6 text-gray8B dark:text-grayC3">
            20Kgs
          </span>
        </div>
        <div>
          <p className="mb-2 font-medium leading-6 dark:text-grayFD">Cabin</p>
          <span className="font-medium leading-6 text-gray8B dark:text-grayC3">
            7 kg
          </span>
        </div>
        <div>
          <p className="mb-2 font-medium leading-6 dark:text-grayFD">Meals</p>
          <span className="font-medium leading-6 text-gray8B dark:text-grayC3">
            Meals Not Available
          </span>
        </div>
      </div>
    </div>
  );
}
