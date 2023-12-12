import { cn } from '@/lib/utils';
import { AddressIcon, BuildingIcon, YellowStarIcon } from '../icons';
import Image from 'next/image';

interface ExploreWorldItemProps {
  image: string;
}

export function ExploreWorldItem({ image }: ExploreWorldItemProps) {
  return (
    <div className="w-[270px] rounded-3xl border border-grayF3">
      <div className={cn('h-[234px] relative')}>
        <Image
          src={image}
          alt="explore"
          height={233}
          width={270}
          className="rounded-t-3xl"
        />
        <div className="absolute top-0 left-0 flex gap-3 items-center p-4">
          <div className="w-10 h-10 flex bg-white rounded-full items-center justify-center">
            <div className="flex gap-1">
              <span className="text-sm font-medium text-black2F">5</span>
              <YellowStarIcon />
            </div>
          </div>
          <div className="text-black2F font-Roboto font-medium h-9 flex items-center px-4 bg-white rounded-[20px]">
            $420
          </div>
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-black2F text-2xl font-medium leading-9">
          Cancun Flight
        </h2>
        <p className="text-gray8B leading-6 mb-[10px]">City, House</p>
        <div className="flex gap-[10px] items-center mb-2">
          <AddressIcon className="text-gray90" />
          <span className="text-gray8B text-sm">Turkey, Mamaris</span>
        </div>
        <div className="flex gap-[10px] items-center mb-2">
          <BuildingIcon className="text-gray90" />
          <span className="text-gray8B text-sm">Rooms available: 375</span>
        </div>
      </div>
    </div>
  );
}
