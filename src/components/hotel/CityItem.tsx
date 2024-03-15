import Image from "next/image";
import { YellowStarIcon } from "@/components/icons";
import { Button } from "../ui";

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
    <div className="mx-5 flex w-full gap-[30px] rounded-[20px] bg-white p-5 dark:bg-black29 xl:mx-0 xl:w-[534px]">
      <Image
        src={image}
        alt="city"
        width={160}
        height={168}
        className="rounded-2xl"
      />
      <div>
        <h3 className="mb-3 text-2xl font-bold text-black32 dark:text-grayFD">
          {title}
        </h3>
        <div className="mb-6 flex items-center gap-2">
          <YellowStarIcon />
          <p className="dark:text-grayC3">
            {rating}{" "}
            <span className="text-gray8B dark:text-grayF3">
              ({totalRating})
            </span>
          </p>
        </div>
        <div className="mb-6 flex items-end text-2xl font-semibold dark:text-grayF6">
          ${price}
          <span className="text-base font-medium text-gray9A dark:text-grayF3">
            /night
          </span>
        </div>
        <Button
          variant="primary"
          className="h-auto w-auto rounded-md px-4 py-2 text-sm !shadow-none"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}
