import { CalendarIcon, ChevronDownIcon } from '@/components/icons';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

interface BookingDetailsProps {}

export function BookingDetails(props: BookingDetailsProps) {
  return (
    <div className="w-[408px] py-5 px-[46px] rounded-[20px] border border-grayEA">
      <div className="flex justify-between items-center pb-4 border-b border-b-grayEC mb-5">
        <div className="flex gap-[10px]">
          <h2 className="text-black text-[34px] font-bold leading-[44px]">
            $142{' '}
            <span className="text-gray8B text-xl leading-8 font-normal">
              /night
            </span>
          </h2>
          <p className="text-grayC3 text-lg pt-[14px]">$184</p>
        </div>
        <div className="text-sm font-medium text-white py-[6px] px-[10px] rounded-3xl bg-primary inline">
          20% OFF
        </div>
      </div>
      <form>
        <div className="flex gap-[14px] mb-5">
          <div className="flex-1">
            <h3 className="text-gray8B font-medium leading-6 mb-3">Check-In</h3>
            <div className="flex gap-[10px] rounded-[10px] bg-grayF6 px-4 py-3">
              <CalendarIcon className="text-gray90" />
              <span className="text-black45 text-sm">May 15, 2021 </span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-gray8B font-medium leading-6 mb-3">
              Check-Out
            </h3>
            <div className="flex gap-[10px] rounded-[10px] bg-grayF6 px-4 py-3">
              <CalendarIcon className="text-gray90" />
              <span className="text-black45 text-sm">May 22, 2021 </span>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h3 className="font-medium leading-6 text-gray90 mb-3">Guest</h3>
          <div className="px-4 py-3 bg-grayF6 text-black45 flex justify-between items-center rounded-[10px]">
            <span className="text-sm">2 Adults, 1 Children</span>
            <ChevronDownIcon></ChevronDownIcon>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-gray90 font-medium leading-6 m-3">
            Extra Features
          </h3>
          <div className="flex justify-between items-center mb-1">
            <Checkbox label="Allow to bring pet"></Checkbox>
            <span className="text-sm text-grayC3 font-medium leading-7">
              $13
            </span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <Checkbox label="Breakfast a day per person"></Checkbox>
            <span className="text-sm font-medium leading-7">$10</span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <Checkbox label="Parking a day"></Checkbox>
            <span className="text-sm text-grayC3 font-medium leading-7">
              $6
            </span>
          </div>
          <div className="flex justify-between items-center">
            <Checkbox label="Extra pillow"></Checkbox>
            <span className="text-sm text-grayC3 font-medium leading-7">
              Free
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-gray90 font-medium leading-6 mb-3">Price</h3>
          <div className="rounded-[10px] bg-grayF6 px-5 py-3 flex-col gap-2 mb-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">1 Nights</span>
              <span className="text-sm leading-7">$500</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Discount 20%</span>
              <span className="text-sm leading-7">$200</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Breakfast a day per person</span>
              <span className="text-sm leading-7">$10</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Service fee</span>
              <span className="text-sm leading-7">$5</span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-5">
            <p className="font-medium leading-6 text-gray90">Total payment</p>
            <p className="text-black45 font-medium leading-7">$300</p>
          </div>
          <Link
            href={'/bookings/hotel-1'}
            className="mb-3 h-12 rounded-xl bg-primary flex items-center justify-center text-xl font-bold text-white"
          >
            Book Now
          </Link>
          <p className="text-gray90 text-sm text-center">
            You will not get charged yet
          </p>
        </div>
      </form>
    </div>
  );
}
