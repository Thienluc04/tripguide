import Image from 'next/image';
import { YellowStarIcon } from '@/components/icons';

interface TrendingItemProps {
  image: string;
  name: string;
  rating: number;
  totalReviews: number;
}

export function TrendingItem({
  image,
  name,
  rating,
  totalReviews,
}: TrendingItemProps) {
  return (
    <div className="p-4 rounded-2xl border-2 border-grayF6 bg-white w-[270px]">
      <Image
        src={image}
        alt="trending-image"
        width={236}
        height={162}
        className="mb-5"
      />
      <h3 className="text-black29 text-xl font-bold mb-2">{name}</h3>
      <div className="flex gap-2 items-center mb-6">
        <YellowStarIcon />
        <span className="text-gray8B text-sm font-medium">
          {rating} ({totalReviews} reviews)
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={'/images/avatar-2.png'}
            alt="avatar"
            width={24}
            height={24}
            className="border border-white rounded-full"
          />
          <Image
            src={'/images/avatar.png'}
            alt="avatar"
            width={24}
            height={24}
            className="-ml-1 border border-white rounded-full"
          />
          <Image
            src={'/images/avatar-3.png'}
            alt="avatar"
            width={24}
            height={24}
            className="-ml-1 border border-white rounded-full"
          />
          <Image
            src={'/images/avatar-4.png'}
            alt="avatar"
            width={24}
            height={24}
            className="-ml-1 border border-white rounded-full"
          />
          <Image
            src={'/images/avatar-5.png'}
            alt="avatar"
            width={24}
            height={24}
            className="-ml-1 border border-white rounded-full"
          />
        </div>
        <p className="text-xs text-gray8B font-medium leading-[18px]">
          50+ go on this hotel
        </p>
      </div>
    </div>
  );
}
