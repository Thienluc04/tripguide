'use client';

import { tabsLink } from '@/constants/general.constant';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowTurnIcon, ChevronDownIcon } from '@/components/icons';
import clsx from 'clsx';

interface HotelHeroProps {}

export function HotelHero(props: HotelHeroProps) {
  const path = usePathname();

  return (
    <div className="relative bg-[url(/images/hotel-hero.png)] h-[578px] pt-[140px] bg-cover bg-center bg-no-repeat">
      <div className="container">
        <h1
          className="text-[64px] font-bold max-w-[487px] leading-[80px] drop-shadow-[0px_8px_16px_rgba(51,_51,_51,_0.08)]
      mb-[70px]"
        >
          Book With Us And Enjoy your Journey !
        </h1>
        <div className="rounded-[20px] px-[60px] py-[30px] bg-white shadow-[0px_12px_60px_0px_rgba(89,_89,_89,_0.10)]">
          <div className="flex gap-[50px] items-end">
            <div className="flex flex-col gap-7 flex-1">
              <div className="flex items-center pb-7 justify-between w-full border-b border-b-grayF3">
                <div className="flex gap-8 items-center">
                  {tabsLink.map((item) => (
                    <Link
                      href={item.path}
                      className={clsx(
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
                  <div className="flex gap-[10px] items-center">
                    <span className="text-lg font-medium text-black44">
                      1 passenger
                    </span>
                    <ChevronDownIcon className="text-gray8B"></ChevronDownIcon>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="rounded-lg border border-[#E7E8EA] bg-[#F4F5F7] px-6 flex flex-col justify-center
              h-[70px] w-[332px] relative"
                >
                  <h3 className="text-lg font-medium mb-[6px]">Location</h3>
                  <p className="text-[#B1B5C3]">Where are you from?</p>
                  <div className="arrow-turn">
                    <ArrowTurnIcon></ArrowTurnIcon>
                  </div>
                </div>
                <div
                  className="rounded-lg border border-[#E7E8EA] bg-[#F4F5F7] px-6 flex flex-col justify-center
              h-[70px] w-[250px] relative"
                >
                  <h3 className="text-lg font-medium mb-[6px]">Check in</h3>
                  <p className="text-[#B1B5C3]">Add Date</p>
                  <div className="arrow-turn">
                    <ArrowTurnIcon></ArrowTurnIcon>
                  </div>
                </div>
                <div
                  className="rounded-lg border border-[#E7E8EA] bg-[#F4F5F7] px-6 flex flex-col justify-center
              h-[70px] w-[250px]"
                >
                  <h3 className="text-lg font-medium mb-[6px]">Check out</h3>
                  <p className="text-[#B1B5C3]">Add Date</p>
                </div>
              </div>
            </div>
            <button className="block h-[70px] w-[152px] rounded-lg text-xl font-bold text-white bg-primary">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
