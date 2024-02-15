import Image from "next/image";
import { AddressIcon, BuildingIcon, YellowStarIcon } from "@/components/icons";

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
    <div className="mb-8 w-[270px] rounded-[20px] border border-grayF3 bg-white p-[14px] transition-all hover:shadow-[0px_15px_45px_0px_rgba(102,_102,_102,_0.10)] dark:border-black44 dark:bg-black29">
      <Image
        src={image}
        alt="explore"
        width={242}
        height={152}
        className="mb-5"
      ></Image>
      <div className="mb-3 flex items-center gap-2">
        <YellowStarIcon></YellowStarIcon>
        <p className="text-sm font-medium dark:text-grayF3">
          {rating}{" "}
          <span className="text-gray8B dark:text-grayC3">({totalRating})</span>
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <h3 className="mb-2 text-xl font-bold dark:text-grayFD">{title}</h3>
          <p className="mb-4 text-sm font-medium text-gray8B dark:text-grayC3">
            {description}
          </p>
          <div className="mb-2 flex gap-[10px]">
            <AddressIcon className="text-grayC3 dark:text-grayF3" />
            <span className="text-sm text-gray8B dark:text-grayC3">
              {address}
            </span>
          </div>
          <div className="mb-2 flex gap-[10px]">
            <BuildingIcon className="text-grayC3 dark:text-grayF3" />
            <span className="text-sm text-gray8B dark:text-grayC3">
              Rooms available: {roomsAvailable}
            </span>
          </div>
        </div>
        <div>
          <span className="rounded-md bg-[rgba(49,_107,_255,_0.20)] px-[10px] py-1 text-lg font-medium text-primary">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
}
