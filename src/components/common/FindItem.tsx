import Image from 'next/image';
import { PizzaIcon, WifiIcon, YellowStarIcon } from '@/components/icons';

interface FindItemProps {
  image: string;
}

export function FindItem({ image }: FindItemProps) {
  return (
    <div className="rounded-2xl border-2 border-[#F4F5F6] p-[18px]">
      <Image
        src={image}
        alt="find-image"
        width={334}
        height={246}
        className="mb-4"
      />
      <h3 className="text-lg font-medium text-black45 mb-[10px]">
        Green House Guest House
      </h3>
      <div className="flex items-center gap-2 mb-4">
        <YellowStarIcon />
        <span className="text-black4F text-sm font-medium">
          4.8 (12 reviews)
        </span>
      </div>
      <div className="flex gap-5 mb-4">
        <div className="flex gap-2 items-center">
          <WifiIcon className="text-grayC3" width={14} height={12} />
          <span className="text-sm font-medium text-gray90">Free wifi</span>
        </div>
        <div className="flex gap-2 items-center">
          <PizzaIcon className="text-grayC3" width={12} height={12} />
          <span className="text-sm font-medium text-gray90">
            Breakfast included
          </span>
        </div>
      </div>
      <div className="h-[1px] bg-grayF6 mb-4"></div>
      <p className="font-bold text-black2F">$260 total</p>
    </div>
  );
}
