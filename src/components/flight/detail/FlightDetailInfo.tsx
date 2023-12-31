import Image from 'next/image';

import emirates from '@images/flights/emirates.png';
import planeTrip from '@images/flights/plane-trip.png';

interface FlightDetailInfoProps {}

export function FlightDetailInfo(props: FlightDetailInfoProps) {
  return (
    <div className="p-10 rounded-[20px] border border-grayF3 bg-white">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-black29 text-2xl font-medium leading-9 mb-2">
            Dhaka To Dubai
          </h2>
          <p className="text-gray8B text-sm font-medium">
            Non stop | 2 hrs 20 mins | Economy | Thu 27 Jul 2020
          </p>
        </div>
        <div className="text-orange54 font-medium leading-6 py-[10px] px-[22px] rounded-lg bg-orange54 bg-opacity-20">
          Change Flight
        </div>
      </div>
      <div className="h-[1px] bg-grayF3 mb-[30px]"></div>
      <div className="flex gap-[50px] items-center mb-10">
        <div className="flex gap-5 items-center">
          <Image src={emirates} alt="emirates" width={50} height={34} />
          <div>
            <h3 className="font-medium text-lg mb-[10px]">IndiGo</h3>
            <p className="text-gray8B text-lg">GE-965 320</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-medium leading-9">08.45</h3>
          <p className="text-gray8B text-sm font-medium mb-1">
            Thu, 27 July 2020
          </p>
          <p className="text-gray8B text-sm font-medium">
            Dhaka zia internationa airport, Bangladesh
          </p>
        </div>
        <div>
          <p className="text-gray8B font-medium leading-6">05 hrs 20 mins</p>
          <Image src={planeTrip} alt="plane-trip" width={130} height={22} />
        </div>
        <div>
          <h3 className="text-2xl font-medium leading-9">01.05</h3>
          <p className="text-sm text-gray8B mb-1">Sat, 30 July 2020</p>
          <p className="text-sm text-gray8B mb-1">Dubai</p>
          <p className="text-sm text-gray8B">Dubai International Airport</p>
        </div>
      </div>
      <div className="flex gap-12 mb-10">
        <div>
          <p className="font-medium leading-6 mb-2">Baggoge:</p>
          <span className="text-gray8B font-medium leading-6">Adult</span>
        </div>
        <div>
          <p className="font-medium leading-6 mb-2">Check-In</p>
          <span className="text-gray8B font-medium leading-6">20Kgs</span>
        </div>
        <div>
          <p className="font-medium leading-6 mb-2">Cabin</p>
          <span className="text-gray8B font-medium leading-6">7 kg</span>
        </div>
        <div>
          <p className="font-medium leading-6 mb-2">Meals</p>
          <span className="text-gray8B font-medium leading-6">
            Meals Not Available
          </span>
        </div>
      </div>
      <div className="h-[1px] bg-grayF3 mb-10"></div>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-black29 text-2xl font-medium leading-9 mb-2">
            Dhaka To Dubai
          </h2>
          <p className="text-gray8B text-sm font-medium">
            Non stop | 2 hrs 20 mins | Economy | Thu 27 Jul 2020
          </p>
        </div>
      </div>
      <div className="flex gap-[50px] items-center mb-10">
        <div className="flex gap-5 items-center">
          <Image src={emirates} alt="emirates" width={50} height={34} />
          <div>
            <h3 className="font-medium text-lg mb-[10px]">IndiGo</h3>
            <p className="text-gray8B text-lg">GE-965 320</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-medium leading-9">08.45</h3>
          <p className="text-gray8B text-sm font-medium mb-1">
            Thu, 27 July 2020
          </p>
          <p className="text-gray8B text-sm font-medium">
            Dhaka zia internationa airport, Bangladesh
          </p>
        </div>
        <div>
          <p className="text-gray8B font-medium leading-6">05 hrs 20 mins</p>
          <Image src={planeTrip} alt="plane-trip" width={130} height={22} />
        </div>
        <div>
          <h3 className="text-2xl font-medium leading-9">01.05</h3>
          <p className="text-sm text-gray8B mb-1">Sat, 30 July 2020</p>
          <p className="text-sm text-gray8B mb-1">Dubai</p>
          <p className="text-sm text-gray8B">Dubai International Airport</p>
        </div>
      </div>
      <div className="flex gap-12">
        <div>
          <p className="font-medium leading-6 mb-2">Baggoge:</p>
          <span className="text-gray8B font-medium leading-6">Adult</span>
        </div>
        <div>
          <p className="font-medium leading-6 mb-2">Check-In</p>
          <span className="text-gray8B font-medium leading-6">20Kgs</span>
        </div>
        <div>
          <p className="font-medium leading-6 mb-2">Cabin</p>
          <span className="text-gray8B font-medium leading-6">7 kg</span>
        </div>
        <div>
          <p className="font-medium leading-6 mb-2">Meals</p>
          <span className="text-gray8B font-medium leading-6">
            Meals Not Available
          </span>
        </div>
      </div>
    </div>
  );
}
