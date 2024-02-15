import Image from "next/image";

interface BestWayItemProps {
  image: string;
  title: string;
  description: string;
}

export function BestWayItem({ image, title, description }: BestWayItemProps) {
  return (
    <div className="w-[240px]">
      <div className="mb-4 h-[212px] w-[242px]">
        <Image src={image} alt="best-way" width={242} height={212} />
      </div>
      <h3 className="mb-1 text-center text-2xl font-medium leading-9 dark:text-grayFD">
        {title}
      </h3>
      <p className="mx-auto text-center text-xs text-gray8B dark:text-grayC3">
        {description}
      </p>
    </div>
  );
}
