import Image from "next/image";
import { YellowStarIcon } from "@/components/icons";

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
    <div className="relative min-w-[270px] xl:min-w-0">
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
            "linear-gradient(2deg, rgba(22, 22, 22, 0.48) 14.56%, rgba(35, 35, 35, 0.00) 25.42%)",
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-end px-[30px] py-4">
        <h3 className="mb-2 text-2xl font-semibold text-white">{title}</h3>
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
