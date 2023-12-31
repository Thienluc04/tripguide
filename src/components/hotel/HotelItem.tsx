import Image from 'next/image';
import {
  AddressIcon,
  CalendarIcon,
  FlagIcon,
  OfferIcon,
  ParkingIcon,
  PlaneIcon,
  SafetyIcon,
  WebsiteIcon,
  WifiCrossIcon,
  YellowStarIcon,
} from '@/components/icons';
import Link from 'next/link';
import { Hotel } from '@/types/hotel';

interface HotelItemProps {
  hotel: Hotel;
}

export function HotelItem({ hotel }: HotelItemProps) {
  return (
    <div className="flex gap-[30px] rounded-xl border border-grayF3">
      <Image
        src={hotel.image}
        alt="hotel"
        width={420}
        height={465}
        className="block rounded-l-xl"
      ></Image>
      <div className="py-[30px] pr-[26px]">
        <h2 className="text-[40px] font-bold leading-[60px] text-black2F mb-[22px]">
          {hotel.title}
        </h2>
        <div className="flex gap-5 items-center mb-11">
          <div className="flex items-center gap-[10px]">
            <YellowStarIcon />
            <p className="text-sm font-medium">
              {hotel.rating}
              <span className="text-gray8B text-sm font-medium">
                ({hotel.totalRate} reviews)
              </span>
            </p>
          </div>
          <div className="flex gap-[10px]">
            <FlagIcon className="text-gray8B" />
            <p className="text-gray8B text-sm">{hotel.location}</p>
          </div>
        </div>
        <div className="flex gap-x-5 gap-y-4 items-center flex-wrap mb-10">
          <div className="flex items-center gap-3">
            <AddressIcon className="text-gray8B" />
            <span className="text-black leading-6">{hotel.plane}</span>
          </div>
          <div className="flex items-center gap-3">
            <CalendarIcon className="text-gray8B" />
            <span className="text-black leading-6">{hotel.date}</span>
          </div>
          <div className="flex items-center gap-3">
            <PlaneIcon className="text-gray8B" />
            <span className="text-black leading-6">{hotel.plane}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <WifiCrossIcon className="text-gray8B" />
              <span className="text-sm">Free Wifi</span>
            </div>
            <div className="flex gap-4 items-center">
              <ParkingIcon className="text-gray8B" />
              <span className="text-sm">Free parking</span>
            </div>
            <div className="flex gap-4 items-center">
              <OfferIcon className="text-gray8B" />
              <span className="text-sm">Special offer</span>
            </div>
            <div className="flex gap-4 items-center">
              <WebsiteIcon className="text-gray8B" />
              <span className="text-sm">Visit hotel website</span>
            </div>
            <div className="flex gap-4 items-center">
              <SafetyIcon className="text-gray8B" />
              <span className="text-sm">Taking safety measures</span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="w-[176px] flex items-center justify-center gap-2 bg-grayF6 rounded-3xl py-1">
              <span className="text-[28px] font-bold leading-10">$320</span>
              <span className="font-medium text-gray8B">For Two</span>
            </p>
            <Link
              href={'/hotels/1'}
              className="text-white shadow-[0px_5px_20px_0px_rgba(20,_92,_230,_0.14)] rounded-3xl bg-primary text-xl font-bold 
              w-[176px] py-[10px] text-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
