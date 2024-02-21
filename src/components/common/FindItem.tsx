import Image from "next/image";
import { PizzaIcon, WifiIcon, YellowStarIcon } from "@/components/icons";

interface FindItemProps {
  image: string;
}

export function FindItem({ image }: FindItemProps) {
  return (
    <div className="rounded-2xl border-2 border-grayF6 p-[18px] dark:border-black44 dark:bg-black29">
      <Image
        src={image}
        alt="find-image"
        width={334}
        height={246}
        className="mb-4"
      />
      <h3 className="mb-[10px] text-lg font-medium text-black45 dark:text-grayFD">
        Green House Guest House
      </h3>
      <div className="mb-4 flex items-center gap-2">
        <YellowStarIcon />
        <span className="text-sm font-medium text-black4F dark:text-grayF3">
          4.8 (12 reviews)
        </span>
      </div>
      <div className="mb-4 flex gap-5">
        <div className="flex items-center gap-2">
          <WifiIcon
            className="text-grayC3 dark:text-grayF3"
            width={14}
            height={12}
          />
          <span className="text-sm font-medium text-gray90 dark:text-grayC3">
            Free wifi
          </span>
        </div>
        <div className="flex items-center gap-2">
          <PizzaIcon
            className="text-grayC3 dark:text-grayF3"
            width={12}
            height={12}
          />
          <span className="text-sm font-medium text-gray90 dark:text-grayC3">
            Breakfast included
          </span>
        </div>
      </div>
      <div className="mb-4 h-[1px] bg-grayF6 dark:bg-black44"></div>
      <p className="font-bold text-black2F dark:text-grayFD">$260 total</p>
    </div>
  );
}
