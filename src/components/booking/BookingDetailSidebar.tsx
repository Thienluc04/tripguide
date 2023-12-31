import { YellowStarIcon } from '@/components/icons';
import { BookingType } from '@/types/general';
import Image from 'next/image';
import Link from 'next/link';

import planeTrip from '@images/flights/plane-trip.png';
import planeDetail from '@images/flights/plane-detail.png';
import payment from '@images/hotels/payment.png';

interface BookingDetailSidebarProps {
  bookingType?: BookingType;
}

export function BookingDetailSidebar({
  bookingType = 'hotel',
}: BookingDetailSidebarProps) {
  return (
    <div className="rounded-[20px] border-2 border-grayF3 bg-white py-10 px-9 w-[444px]">
      {bookingType !== 'flight' && (
        <h2 className="text-black text-lg font-medium mb-[14px]">
          Switzerland Hotels and Places to Stay{' '}
        </h2>
      )}
      {bookingType === 'flight' && (
        <div className="flex gap-5 items-center mb-[14px]">
          <p className="text-black44 text-xl font-bold">AKL</p>
          <Image src={planeTrip} alt="plane-trip" width={130} height={20} />
          <p className="text-black44 text-xl font-bold">SGN</p>
        </div>
      )}
      <div className="flex items-center gap-[10px] mb-6">
        <YellowStarIcon />
        <p className="text-black29 text-sm font-medium">
          4.8 <span className="text-gray8B">(122 reviews)</span>
        </p>
      </div>
      <div className="mb-8">
        <Image
          src={bookingType === 'flight' ? planeDetail : payment}
          className="rounded-xl"
          alt="hotel"
          width={326}
          height={177}
        />
      </div>
      <div className="inline-block">
        <p className="text-gray8B font-medium leading-6 mb-4">
          {bookingType === 'flight'
            ? '1 Baggoge  +  Meals'
            : '1 bedroom + 1 private room'}
        </p>
        <div className="w-[170px] h-[1px] bg-grayEE mb-5"></div>
      </div>
      <div className="flex mb-5">
        <div className="flex-1">
          <h3 className="text-grayC3 text-sm font-medium">Check in</h3>
          <p className="text-gray8B font-medium leading-6">June 27, 2020</p>
        </div>
        <div className="w-[2px] h-12 bg-grayF6"></div>
        <div className="flex-1 ml-[14px]">
          <h3 className="text-grayC3 text-sm font-medium">Check out</h3>
          <p className="text-gray8B font-medium leading-6">June 30, 2020</p>
        </div>
      </div>
      <div className="mb-10">
        <h3 className="text-grayC3 text-sm font-medium">Guest</h3>
        <p className="text-gray8B font-medium leading-6">2 guests</p>
      </div>
      <div className="mb-[30px]">
        <h2 className="text-[26px] font-medium font-Roboto leading-7 text-black33 mb-10">
          Booked details
        </h2>
        <div className="flex flex-col gap-5 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray8B font-medium leading-6">$119 + 5nights</p>
            <p className="text-black45 font-medium leading-6">$833</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray8B font-medium leading-6">
              Ocupancy text and fee
            </p>
            <p className="text-black45 font-medium leading-6">-$125</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray8B font-medium leading-6">Service free</p>
            <p className="text-black45 font-medium leading-6">$103</p>
          </div>
        </div>
        <div className="flex justify-between items-center py-2 px-3 rounded-md bg-grayF6">
          <p className="text-black2F font-medium leading-6">Total</p>
          <p className="text-black45 font-medium leading-6">$833</p>
        </div>
      </div>
      <Link
        href={''}
        className="text-grayC3 text-sm font-medium block text-center"
      >
        Report this property
      </Link>
    </div>
  );
}
