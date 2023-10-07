import Image from 'next/image';
import { YellowStarIcon } from '@/components/icons';

export interface PassionItemProps {
  image: string;
  title: string;
  rating: number;
  totalRating: number;
}

export function PassionItem({
  image,
  title,
  rating,
  totalRating,
}: PassionItemProps) {
  return (
    <div className="relative">
      <Image
        src={image}
        alt="passion"
        width={270}
        height={323}
        className="rounded-2xl"
      ></Image>
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            'linear-gradient(2deg, rgba(22, 22, 22, 0.48) 14.56%, rgba(35, 35, 35, 0.00) 25.42%)',
        }}
      ></div>
      <div className="absolute inset-0 py-4 px-[30px] flex flex-col justify-end">
        <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
        <div className="flex gap-2">
          <YellowStarIcon />
          <p className="text-sm text-white">
            {rating} ({totalRating} reviews)
          </p>
        </div>
      </div>
    </div>
  );
}
