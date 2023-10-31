import { TickIcon } from '@/components/icons';
import Link from 'next/link';

interface RoomSuggestProps {
  title: string;
  price: number;
}

export function RoomSuggest({ title, price }: RoomSuggestProps) {
  return (
    <div className="rounded-[10px] border border-grayF3 px-[30px] py-5 flex justify-between">
      <div>
        <h3 className="text-2xl font-medium leading-9 text-black29 mb-4">
          {title}
        </h3>
        <p className="text-gray8B text-sm mb-4">Offer conditions:</p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <TickIcon className="text-green82" />
            <span className="text-sm">Non-refundable</span>
          </div>
          <div className="flex gap-2 items-center">
            <TickIcon className="text-green82" />
            <span className="text-sm">Free Wifi</span>
          </div>
          <div className="flex gap-2 items-center">
            <TickIcon className="text-green82" />
            <span className="text-sm">Breakfast for 2 people</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-black text-[34px] font-bold leading-[44px] mb-4">
          ${price}{' '}
          <span className="text-gray8B text-xl leading-8 font-normal">
            /night
          </span>
        </p>
        <p className="text-orange text-lg font-medium">Save $4</p>
        <p className="text-gray8B text-xs leading-[18px] mb-5">
          on TripGuide.com $106
        </p>
        <Link
          href={'/'}
          className="text-lg font-medium text-white rounded-md bg-primary px-4 py-2 inline-block"
        >
          Select
        </Link>
      </div>
    </div>
  );
}
