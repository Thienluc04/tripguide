import Image from "next/image";

interface BestPlaceItemProps {
  image: string;
  title: string;
  description: string;
}

export function BestPlaceItem({
  image,
  title,
  description,
}: BestPlaceItemProps) {
  return (
    <div
      className="w-[270px] cursor-pointer rounded-lg border border-grayF3 px-[30px] py-7 transition-all 
      duration-300 hover:shadow-[0px_20px_51px_rgba(96,_96,_96,_0.10)] dark:border-black44 dark:hover:bg-black29"
    >
      <Image
        src={image}
        alt="place01"
        width={70}
        height={70}
        className="mb-4"
      />
      <h3 className="mb-3 text-xl font-bold text-black44 dark:text-grayF3">
        {title}
      </h3>
      <p className="text-sm font-medium text-gray8B dark:text-gray90">
        {description}
      </p>
    </div>
  );
}
