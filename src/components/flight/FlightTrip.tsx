import Image from 'next/image';
import { ArrowLeftLong, ArrowRightLong } from '../icons';
import { FlightTime } from '.';
import Link from 'next/link';

import emirates from '@images/flights/emirates.png';

interface FlightTripProps {
  type: 'trip' | 'trip-return';
}

export function FlightTrip({ type }: FlightTripProps) {
  return (
    <>
      <h3 className="flex text-lg font-medium items-center gap-2 mb-3">
        Dhaka
        {type === 'trip' && <ArrowRightLong className="text-gray8B" />}
        {type === 'trip-return' && <ArrowLeftLong className="text-gray8B" />}
        Dubai Thu, 19 Aug
      </h3>
      <div className="flex gap-[50px] items-center">
        <Image src={emirates} alt="amirates" width={52} height={35} />
        <div>
          <p className="text-2xl font-medium leading-9 text-black2F mb-1">
            DAC
          </p>
          <span className="text-sm font-medium text-gray90">08:45 AM</span>
        </div>
        <FlightTime />
        <div>
          <p className="text-2xl font-medium leading-9 text-black2F mb-1">
            DXB
          </p>
          <span className="text-sm font-medium text-gray90">01:05 PM</span>
        </div>
        <div>
          <p className="text-black2F text-2xl font-medium leading-9 text-center">
            $350
          </p>
          <Link
            href={'/flights/1'}
            className="text-white text-sm font-bold rounded-3xl bg-blueFE w-[120px] block text-center py-2"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
