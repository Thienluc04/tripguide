import Image from 'next/image';
import { AddressIcon, BuildingIcon, YellowStarIcon } from '@/components/icons';

interface ExploreItemProps {
  image: string;
  rating: number;
  totalRating: number;
  title: string;
  description: string;
  address: string;
  roomsAvailable: number;
  price: number;
}

export function ExploreItem({
  image,
  rating,
  totalRating,
  title,
  address,
  roomsAvailable,
  description,
  price,
}: ExploreItemProps) {
  return (
    <div className="p-[14px] rounded-[20px] border border-grayF3 bg-white w-[270px]">
      <Image
        src={image}
        alt="explore"
        width={242}
        height={152}
        className="mb-5"
      ></Image>
      <div className="flex gap-2 items-center mb-3">
        <YellowStarIcon></YellowStarIcon>
        <p className="text-sm font-medium">
          {rating} <span className="text-gray8B">({totalRating})</span>
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray8B text-sm font-medium mb-4">{description}</p>
          <div className="flex gap-[10px] mb-2">
            <AddressIcon className="text-grayC3"></AddressIcon>
            <span className="text-sm text-gray8B">{address}</span>
          </div>
          <div className="flex gap-[10px] mb-2">
            <BuildingIcon className="text-grayC3"></BuildingIcon>
            <span className="text-sm text-gray8B">
              Rooms available: {roomsAvailable}
            </span>
          </div>
        </div>
        <div>
          <span className="text-primary text-lg font-medium py-1 px-[10px] bg-[rgba(49,_107,_255,_0.20)] rounded-md">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
}
