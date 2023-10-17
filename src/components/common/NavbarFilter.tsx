'use client';

import {
  AddressIcon,
  ChevronDownIcon,
  ChevronTopIcon,
} from '@/components/icons';
import { tabsLink } from '@/constants/general.constant';
import { listLocation } from '@/constants/hotel.constant';
import { cn } from '@/lib/utils';
import { useHotelStore } from '@/store/hotelStore';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { PropsWithChildren, useState } from 'react';
import { FilterItem, Passenger } from '.';
import { Button } from '../ui';

interface NavbarFilterProps {}

export function NavbarFilter({
  children,
}: PropsWithChildren<NavbarFilterProps>) {
  const [openPassenger, setOpenPassenger] = useState<boolean>(false);

  const path = usePathname();
  const router = useRouter();

  const { params } = useHotelStore();

  const handleSubmitFilter = () => {
    router.push(
      `/list-hotel/?location=${params.location}&checkInDate=${
        params.checkInDate
      }&checkOutDate=${params.checkOutDate}&passengers=${
        params.passenger?.adults +
        '.' +
        params.passenger?.children +
        '.' +
        params.passenger?.infants
      }`
    );
  };

  return (
    <div className="rounded-[20px] px-[60px] py-[30px] bg-white shadow-[0px_12px_60px_0px_rgba(89,_89,_89,_0.10)] relative">
      {openPassenger && <Passenger></Passenger>}
      <div className="flex gap-[50px] items-end">
        <div className="flex flex-col gap-7 flex-1">
          <div className="flex items-center pb-7 justify-between w-full border-b border-b-grayF3">
            <div className="flex gap-8 items-center">
              {tabsLink.map((item) => (
                <Link
                  href={item.path}
                  className={cn(
                    item.path === path
                      ? 'text-black44 tab-active'
                      : 'text-gray8B',
                    'flex gap-2 items-center'
                  )}
                  key={item.path}
                >
                  {item.icon}
                  <span className="text-sm font-bold">{item.label}</span>
                </Link>
              ))}
            </div>
            <div className="flex gap-6 items-center">
              <div className="flex gap-[10px] items-center">
                <span className="text-lg font-medium text-black44">
                  Round trip
                </span>
                <ChevronDownIcon className="text-gray8B"></ChevronDownIcon>
              </div>
              <div
                className="flex gap-[10px] items-center cursor-pointer"
                onClick={() => setOpenPassenger(!openPassenger)}
              >
                <span className="text-lg font-medium text-black44">
                  1 passenger
                </span>
                {openPassenger ? (
                  <ChevronTopIcon className="text-gray8B"></ChevronTopIcon>
                ) : (
                  <ChevronDownIcon className="text-gray8B"></ChevronDownIcon>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FilterItem
              title="Location"
              description="Where are you from?"
              className="w-[332px]"
              listLocation={listLocation}
              type="location"
            />
            <FilterItem
              type="date"
              title="Check in"
              description="Add Date"
              valueDate={params.checkInDate}
            />
            <FilterItem
              type="date"
              title="Check out"
              description="Add Date"
              arrowTurn={false}
              valueDate={params.checkOutDate}
            />
          </div>
        </div>
        <Button variant="primary" onClick={handleSubmitFilter}>
          Search
        </Button>
      </div>
    </div>
  );
}
