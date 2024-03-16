import Image from "next/image";
import { YellowStarIcon } from "@/components/icons";

import avatar from "@images/avatar.png";
import avatar2 from "@images/avatar-2.png";
import avatar3 from "@images/avatar-3.png";
import avatar4 from "@images/avatar-4.png";
import avatar5 from "@images/avatar-5.png";

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
    <div className="mx-auto w-[270px] rounded-2xl border-2 border-grayF6 bg-white p-4 dark:border-black29 dark:bg-black29 xl:mx-0">
      <Image
        src={image}
        alt="trending-image"
        width={236}
        height={162}
        className="mb-5"
      />
      <h3 className="mb-2 text-xl font-bold text-black29 dark:text-grayFD">
        {name}
      </h3>
      <div className="mb-6 flex items-center gap-2">
        <YellowStarIcon />
        <span className="text-sm font-medium text-gray8B dark:text-grayC3">
          {rating} ({totalReviews} reviews)
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={avatar2}
            alt="avatar"
            width={24}
            height={24}
            className="rounded-full border border-white dark:border-black29"
          />
          <Image
            src={avatar}
            alt="avatar"
            width={24}
            height={24}
            className="-ml-1 rounded-full border border-white dark:border-black29"
          />
          <Image
            src={avatar3}
            alt="avatar"
            width={24}
            height={24}
            className="-ml-1 rounded-full border border-white dark:border-black29"
          />
          <Image
            src={avatar4}
            alt="avatar"
            width={24}
            height={24}
            className="-ml-1 rounded-full border border-white dark:border-black29"
          />
          <Image
            src={avatar5}
            alt="avatar"
            width={24}
            height={24}
            className="-ml-1 rounded-full border border-white dark:border-black29"
          />
        </div>
        <p className="text-xs font-medium leading-[18px] text-gray8B dark:text-grayC3">
          50+ go on this hotel
        </p>
      </div>
    </div>
  );
}
