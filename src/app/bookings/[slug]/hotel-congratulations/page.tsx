import { Breadcrumb } from '@/components/common';
import {
  CalendarIcon,
  LaptopIcon,
  TotalIcon,
  WalletIcon,
  YellowStarIcon,
} from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

export default function HotelCongratulations() {
  return (
    <div className="container">
      <Breadcrumb
        list={['Home', 'Hotel list', 'Hotel details', 'Confirm and pay']}
        last="Congratulations"
        className="mb-[70px]"
      />
      <h2 className="text-2xl font-bold mb-5">Congratulations!</h2>
      <h1 className="text-5xl font-medium leading-[60px] mb-6">
        Your trip has been booked!
      </h1>
      <div className="h-[1px] w-[822px] bg-grayF3 mb-9"></div>
      <h2 className="text-black2F text-[34px] font-bold leading-[44px] mb-7">
        Switzerland Hotels and Places to Stay
      </h2>
      <div className="flex justify-between items-end mb-[30px]">
        <div className="w-[380px]">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <YellowStarIcon />
              <p className="text-sm font-medium text-black45">
                4.8 <span className="text-gray90">(122 reviews)</span>
              </p>
            </div>
            <p className="text-sm font-medium text-black45">
              1 bad room + Private room
            </p>
          </div>
          <div className="h-[1px] w-full bg-grayF4 mb-6"></div>
          <div className="flex gap-6 mb-[30px]">
            <div className="rounded-xl bg-grayF6 py-2 px-5 pb-3 flex-1">
              <h3 className="text-black45 text-sm font-medium">Dates</h3>
              <p className="text-gray8B font-medium leading-6">
                May 15 - 22, 2021
              </p>
            </div>
            <div className="rounded-xl bg-grayF6 py-2 px-5 pb-3 flex-1">
              <h3 className="text-black45 text-sm font-medium">Travelers</h3>
              <p className="text-gray8B font-medium leading-6">1 Passenger</p>
            </div>
          </div>
          <div className="rounded-[10px] border border-grayEF bg-gray4F6 py-5 px-6">
            <h2 className="text-black2F text-[28px] font-bold leading-10 mb-6">
              Reserve details
            </h2>
            <div className="flex justify-between mb-[22px] items-center">
              <div className="flex gap-3 text-gray90 items-center">
                <LaptopIcon />
                <span className="font-medium leading-6">Booking code</span>
              </div>
              <p className="text-black45 font-medium leading-6">FD_158456</p>
            </div>
            <div className="flex justify-between mb-[22px] items-center">
              <div className="flex gap-3 text-gray90 items-center">
                <CalendarIcon />
                <span className="font-medium leading-6">Date</span>
              </div>
              <p className="text-black45 font-medium leading-6">30 Apr, 2021</p>
            </div>
            <div className="flex justify-between mb-[22px] items-center">
              <div className="flex gap-3 text-gray90 items-center">
                <TotalIcon />
                <span className="font-medium leading-6">Total</span>
              </div>
              <p className="text-black45 font-medium leading-6">$833</p>
            </div>
            <div className="flex justify-between mb-[22px] items-center">
              <div className="flex gap-3 text-gray90 items-center">
                <WalletIcon />
                <span className="font-medium leading-6">Payment method</span>
              </div>
              <p className="text-black45 font-medium leading-6">Credit card</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={'/images/hotels/booked.png'}
            alt="book-img"
            width={670}
            height={403}
          />
        </div>
      </div>
      <Link
        href={'/'}
        className="text-white font-bold h-12 rounded-[34px] bg-blueFE w-[205px] flex justify-center items-center"
      >
        Go To Your Home
      </Link>
    </div>
  );
}
