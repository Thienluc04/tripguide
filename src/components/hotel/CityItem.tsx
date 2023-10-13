import Image from 'next/image';
import { YellowStarIcon } from '@/components/icons';
import { Button } from '../ui';

interface CityItemProps {
  image: string;
  title: string;
  rating: number;
  totalRating: number;
  price: number;
}

export function CityItem({
  image,
  title,
  rating,
  totalRating,
  price,
}: CityItemProps) {
  return (
    <div className="rounded-[20px] bg-white p-4 flex gap-[30px] w-[534px]">
      <Image
        src={image}
        alt="city"
        width={160}
        height={168}
        className="rounded-2xl"
      ></Image>
      <div>
        <h3 className="text-black32 text-2xl font-bold mb-3">{title}</h3>
        <div className="flex gap-2 items-center mb-6">
          <YellowStarIcon></YellowStarIcon>
          <p>
            {rating} <span className="text-gray8B">({totalRating})</span>
          </p>
        </div>
        <div className="flex text-2xl font-semibold items-end mb-6">
          ${price}
          <span className="text-gray9A text-base font-medium">/night</span>
        </div>
        <Button
          variant="primary"
          className="rounded-md py-2 px-4 text-sm !shadow-none w-auto h-auto"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}
